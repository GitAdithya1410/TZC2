import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { CityAutocomplete } from './CityAutocomplete';
import { cities, City } from '../data/cities';

export function TimeConverter() {
  const [hour, setHour] = useState('5');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('PM');
  const [sourceCity, setSourceCity] = useState<City | null>(
    cities.find(c => c.timezone === 'Asia/Kolkata') || null
  );
  const [destCity, setDestCity] = useState<City | null>(
    cities.find(c => c.timezone === 'Europe/London') || null
  );
  const [convertedTime, setConvertedTime] = useState('');
  const [dateContext, setDateContext] = useState('');
  const [errors, setErrors] = useState<{
    hour?: string;
    minute?: string;
    sourceCity?: string;
    destCity?: string;
  }>({});

  // Clear converted time when cities change
  useEffect(() => {
    setConvertedTime('');
    setDateContext('');
    setErrors({});
  }, [sourceCity, destCity]);

  const handleConvert = () => {
    // Validate inputs
    const newErrors: typeof errors = {};

    if (!hour || hour.trim() === '') {
      newErrors.hour = 'Hour is required';
    } else {
      const hourNum = parseInt(hour);
      if (isNaN(hourNum) || hourNum < 1 || hourNum > 12) {
        newErrors.hour = 'Hour must be between 1 and 12';
      }
    }

    if (!minute || minute.trim() === '') {
      newErrors.minute = 'Minute is required';
    } else {
      const minuteNum = parseInt(minute);
      if (isNaN(minuteNum) || minuteNum < 0 || minuteNum > 59) {
        newErrors.minute = 'Minute must be between 0 and 59';
      }
    }

    if (!sourceCity) {
      newErrors.sourceCity = 'Please select a source city';
    }

    if (!destCity) {
      newErrors.destCity = 'Please select a destination city';
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setConvertedTime('');
      setDateContext('');
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    try {
      // Convert 12-hour to 24-hour format
      let hour24 = parseInt(hour);
      if (period === 'PM' && hour24 !== 12) {
        hour24 += 12;
      } else if (period === 'AM' && hour24 === 12) {
        hour24 = 0;
      }

      // Get current date/time in source timezone
      const now = new Date();
      const sourceTimeStr = now.toLocaleString('en-US', {
        timeZone: sourceCity.timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });

      // Parse source date
      const [sourceDateStr, sourceTimeStrPart] = sourceTimeStr.split(', ');
      const [sourceMonth, sourceDay, sourceYear] = sourceDateStr.split('/');
      
      // Create a date object representing the input time in source timezone
      // This is today's date in source TZ with the user's specified time
      const sourceDateTime = new Date(Date.UTC(
        parseInt(sourceYear),
        parseInt(sourceMonth) - 1,
        parseInt(sourceDay),
        hour24,
        parseInt(minute),
        0
      ));

      // Get the UTC offset for source timezone at this moment
      const sourceTestDate = new Date();
      const sourceUTCStr = sourceTestDate.toLocaleString('en-US', { timeZone: 'UTC', hour12: false });
      const sourceTZStr = sourceTestDate.toLocaleString('en-US', { timeZone: sourceCity.timezone, hour12: false });
      const sourceOffsetMs = new Date(sourceTZStr).getTime() - new Date(sourceUTCStr).getTime();

      // Get the UTC offset for dest timezone
      const destTZStr = sourceTestDate.toLocaleString('en-US', { timeZone: destCity.timezone, hour12: false });
      const destOffsetMs = new Date(destTZStr).getTime() - new Date(sourceUTCStr).getTime();

      // Calculate the actual UTC time for the source time
      const sourceUTCTime = sourceDateTime.getTime() - sourceOffsetMs;
      
      // Calculate destination time
      const destDateTime = new Date(sourceUTCTime + destOffsetMs);

      // Format destination time
      const destHour = destDateTime.getUTCHours();
      const destMinute = destDateTime.getUTCMinutes();
      const destPeriod = destHour >= 12 ? 'PM' : 'AM';
      const destHour12 = destHour % 12 || 12;

      // Get destination date string
      const destDateStr = new Date(sourceUTCTime).toLocaleString('en-US', {
        timeZone: destCity.timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour12: false
      }).split(',')[0];

      const [destMonth, destDay, destYear] = destDateStr.split('/');

      // Calculate day difference
      const sourceDateOnly = new Date(parseInt(sourceYear), parseInt(sourceMonth) - 1, parseInt(sourceDay));
      const destDateOnly = new Date(parseInt(destYear), parseInt(destMonth) - 1, parseInt(destDay));
      const dayDiff = Math.round((destDateOnly.getTime() - sourceDateOnly.getTime()) / (1000 * 60 * 60 * 24));

      // Set date context
      let context = '';
      if (dayDiff === -1) {
        context = 'the previous day';
      } else if (dayDiff === 1) {
        context = 'the next day';
      } else if (dayDiff < -1) {
        context = `${Math.abs(dayDiff)} days before`;
      } else if (dayDiff > 1) {
        context = `${dayDiff} days after`;
      }

      setConvertedTime(`${destHour12}:${destMinute.toString().padStart(2, '0')} ${destPeriod}`);
      setDateContext(context);
    } catch (error) {
      console.error('Conversion error:', error);
      setConvertedTime('Error converting time');
      setDateContext('');
    }
  };

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg border-2 border-purple-100">
      <div className="space-y-6">
        <h2 className="text-2xl text-purple-900">Convert Specific Time</h2>
        <p className="text-gray-600">Example: 5 PM IST to London time</p>

        {/* Input Time */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-700">Enter Time</label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              min="1"
              max="12"
              value={hour}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (e.target.value === '' || (val >= 1 && val <= 12)) {
                  setHour(e.target.value);
                }
              }}
              className={`w-20 px-3 py-2 border-2 rounded-lg focus:border-purple-500 focus:outline-none ${
                errors.hour ? 'border-red-500' : 'border-purple-200'
              }`}
              placeholder="HH"
            />
            <span className="text-2xl">:</span>
            <input
              type="number"
              min="0"
              max="59"
              value={minute}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (e.target.value === '' || (val >= 0 && val <= 59)) {
                  setMinute(e.target.value);
                }
              }}
              onBlur={(e) => {
                // Pad with zero when user leaves the field
                if (e.target.value !== '') {
                  setMinute(e.target.value.padStart(2, '0'));
                }
              }}
              className={`w-20 px-3 py-2 border-2 rounded-lg focus:border-purple-500 focus:outline-none ${
                errors.minute ? 'border-red-500' : 'border-purple-200'
              }`}
              placeholder="MM"
            />
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-4 py-2 border-2 border-purple-200 rounded-lg focus:border-purple-500 focus:outline-none bg-white"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
          {(errors.hour || errors.minute) && (
            <div className="text-red-600 text-sm mt-1">
              {errors.hour || errors.minute}
            </div>
          )}
        </div>

        {/* Source City */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-700">From City</label>
          <CityAutocomplete
            cities={cities}
            value={sourceCity}
            onChange={setSourceCity}
            placeholder="Type source city (e.g., Mumbai, Delhi...)"
            hasError={!!errors.sourceCity}
          />
          {errors.sourceCity && (
            <div className="text-red-600 text-sm">{errors.sourceCity}</div>
          )}
        </div>

        {/* Destination City */}
        <div className="space-y-2">
          <label className="block text-sm text-gray-700">To City</label>
          <CityAutocomplete
            cities={cities}
            value={destCity}
            onChange={setDestCity}
            placeholder="Type destination city (e.g., London, NYC...)"
            hasError={!!errors.destCity}
          />
          {errors.destCity && (
            <div className="text-red-600 text-sm">{errors.destCity}</div>
          )}
        </div>

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all shadow-md flex items-center justify-center gap-2"
        >
          Convert Time
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Result */}
        {convertedTime && (
          <div className="p-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white">
            <div className="text-sm opacity-90 mb-2">Converted Time</div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-3xl">
                  {hour}:{minute} {period}
                </div>
                <div className="text-sm opacity-75 mt-1">
                  {sourceCity.label}
                </div>
              </div>
              <ArrowRight className="w-8 h-8 opacity-75" />
              <div>
                <div className="text-3xl">
                  {convertedTime}
                </div>
                <div className="text-sm opacity-75 mt-1">
                  {destCity.label}
                </div>
                {dateContext && (
                  <div className="text-sm opacity-90 mt-1 font-medium">
                    ({dateContext})
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
