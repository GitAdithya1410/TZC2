import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { City } from '../data/cities';

interface CityAutocompleteProps {
  cities: City[];
  value: City | null;
  onChange: (city: City | null) => void;
  placeholder?: string;
  hasError?: boolean;
}

export function CityAutocomplete({ cities, value, onChange, placeholder = 'Search city...', hasError = false }: CityAutocompleteProps) {
  const [inputValue, setInputValue] = useState(value?.label || '');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      setInputValue(value.label);
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsOpen(true);
    setHighlightedIndex(0);

    if (value.trim() === '') {
      setFilteredCities([]);
      onChange(null); // Clear the selected city when input is cleared
      return;
    }

    const searchLower = value.toLowerCase();
    const filtered = cities.filter(city => 
      city.searchTerms.toLowerCase().includes(searchLower) ||
      city.name.toLowerCase().includes(searchLower) ||
      city.country.toLowerCase().includes(searchLower)
    ).slice(0, 8); // Limit to 8 results

    setFilteredCities(filtered);
  };

  const handleSelectCity = (city: City) => {
    setInputValue(city.label);
    onChange(city);
    setIsOpen(false);
    setFilteredCities([]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || filteredCities.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex(prev => 
          prev < filteredCities.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
        break;
      case 'Enter':
        e.preventDefault();
        if (filteredCities[highlightedIndex]) {
          handleSelectCity(filteredCities[highlightedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const handleFocus = () => {
    if (inputValue.trim() !== '' && filteredCities.length > 0) {
      setIsOpen(true);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 border-2 ${hasError ? 'border-red-500' : 'border-indigo-200'} rounded-lg focus:border-indigo-500 focus:outline-none bg-white`}
        />
      </div>

      {isOpen && filteredCities.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-indigo-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {filteredCities.map((city, index) => (
            <button
              key={`${city.name}-${city.country}`}
              onClick={() => handleSelectCity(city)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`w-full text-left px-4 py-3 hover:bg-indigo-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                index === highlightedIndex ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="font-medium text-gray-900">{city.name}</div>
              <div className="text-sm text-gray-500">{city.country}</div>
            </button>
          ))}
        </div>
      )}

      {isOpen && inputValue.trim() !== '' && filteredCities.length === 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 border-indigo-200 rounded-lg shadow-lg p-4 text-center text-gray-500">
          No cities found
        </div>
      )}
    </div>
  );
}