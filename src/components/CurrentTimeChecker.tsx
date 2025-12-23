import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { Card } from '../ui/card';
import { CityAutocomplete } from './CityAutocomplete';
import { cities, City } from '../data/cities';

export function CurrentTimeChecker() {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const cityTime = new Date(now.toLocaleString('en-US', { timeZone: selectedCity?.timezone }));
      
      setCurrentTime(cityTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit',
        hour12: true 
      }));
      
      setCurrentDate(cityTime.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }));
    };

    if (selectedCity) {
      updateTime();
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedCity]);

  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-lg border-2 border-indigo-100">
      <div className="space-y-4">
        <h2 className="text-2xl text-indigo-900">You wanna know time at?</h2>
        
        <CityAutocomplete
          cities={cities}
          value={selectedCity}
          onChange={setSelectedCity}
          placeholder="Type city name (e.g., Hyd, London, NYC...)"
        />

        {/* Time Display */}
        <div className="mt-6 p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5" />
            <span className="text-lg opacity-90">Time now over there</span>
          </div>
          <div className="text-5xl mb-2">{currentTime}</div>
          <div className="text-lg opacity-90">{currentDate}</div>
          <div className="text-sm opacity-75 mt-2">
            {selectedCity?.label}
          </div>
        </div>
      </div>
    </Card>
  );
}
