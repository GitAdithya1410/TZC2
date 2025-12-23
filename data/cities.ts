export interface City {
  name: string;
  country: string;
  timezone: string;
  label: string; // Full display label
  searchTerms: string; // For better search matching
}

export const cities: City[] = [
  // United States
  { name: 'New York', country: 'USA', timezone: 'America/New_York', label: 'New York, USA', searchTerms: 'new york nyc ny usa america' },
  { name: 'Los Angeles', country: 'USA', timezone: 'America/Los_Angeles', label: 'Los Angeles, USA', searchTerms: 'los angeles la california usa america' },
  { name: 'Chicago', country: 'USA', timezone: 'America/Chicago', label: 'Chicago, USA', searchTerms: 'chicago illinois usa america' },
  { name: 'Houston', country: 'USA', timezone: 'America/Chicago', label: 'Houston, USA', searchTerms: 'houston texas usa america' },
  { name: 'Phoenix', country: 'USA', timezone: 'America/Phoenix', label: 'Phoenix, USA', searchTerms: 'phoenix arizona usa america' },
  { name: 'Philadelphia', country: 'USA', timezone: 'America/New_York', label: 'Philadelphia, USA', searchTerms: 'philadelphia philly pennsylvania usa america' },
  { name: 'San Antonio', country: 'USA', timezone: 'America/Chicago', label: 'San Antonio, USA', searchTerms: 'san antonio texas usa america' },
  { name: 'San Diego', country: 'USA', timezone: 'America/Los_Angeles', label: 'San Diego, USA', searchTerms: 'san diego california usa america' },
  { name: 'Dallas', country: 'USA', timezone: 'America/Chicago', label: 'Dallas, USA', searchTerms: 'dallas texas usa america' },
  { name: 'San Jose', country: 'USA', timezone: 'America/Los_Angeles', label: 'San Jose, USA', searchTerms: 'san jose california usa america' },
  { name: 'Austin', country: 'USA', timezone: 'America/Chicago', label: 'Austin, USA', searchTerms: 'austin texas usa america' },
  { name: 'Jacksonville', country: 'USA', timezone: 'America/New_York', label: 'Jacksonville, USA', searchTerms: 'jacksonville florida usa america' },
  { name: 'San Francisco', country: 'USA', timezone: 'America/Los_Angeles', label: 'San Francisco, USA', searchTerms: 'san francisco sf california usa america' },
  { name: 'Seattle', country: 'USA', timezone: 'America/Los_Angeles', label: 'Seattle, USA', searchTerms: 'seattle washington usa america' },
  { name: 'Denver', country: 'USA', timezone: 'America/Denver', label: 'Denver, USA', searchTerms: 'denver colorado usa america' },
  { name: 'Boston', country: 'USA', timezone: 'America/New_York', label: 'Boston, USA', searchTerms: 'boston massachusetts usa america' },
  { name: 'Miami', country: 'USA', timezone: 'America/New_York', label: 'Miami, USA', searchTerms: 'miami florida usa america' },
  { name: 'Las Vegas', country: 'USA', timezone: 'America/Los_Angeles', label: 'Las Vegas, USA', searchTerms: 'las vegas vegas nevada usa america' },
  { name: 'Portland', country: 'USA', timezone: 'America/Los_Angeles', label: 'Portland, USA', searchTerms: 'portland oregon usa america' },
  { name: 'Atlanta', country: 'USA', timezone: 'America/New_York', label: 'Atlanta, USA', searchTerms: 'atlanta georgia usa america' },

  // United Kingdom
  { name: 'London', country: 'UK', timezone: 'Europe/London', label: 'London, UK', searchTerms: 'london uk england britain' },
  { name: 'Manchester', country: 'UK', timezone: 'Europe/London', label: 'Manchester, UK', searchTerms: 'manchester uk england britain' },
  { name: 'Birmingham', country: 'UK', timezone: 'Europe/London', label: 'Birmingham, UK', searchTerms: 'birmingham uk england britain' },
  { name: 'Edinburgh', country: 'UK', timezone: 'Europe/London', label: 'Edinburgh, UK', searchTerms: 'edinburgh scotland uk britain' },
  { name: 'Glasgow', country: 'UK', timezone: 'Europe/London', label: 'Glasgow, UK', searchTerms: 'glasgow scotland uk britain' },
  { name: 'Liverpool', country: 'UK', timezone: 'Europe/London', label: 'Liverpool, UK', searchTerms: 'liverpool uk england britain' },

  // India
  { name: 'Mumbai', country: 'India', timezone: 'Asia/Kolkata', label: 'Mumbai, India', searchTerms: 'mumbai bombay india ist' },
  { name: 'Delhi', country: 'India', timezone: 'Asia/Kolkata', label: 'Delhi, India', searchTerms: 'delhi new delhi india ist' },
  { name: 'Bangalore', country: 'India', timezone: 'Asia/Kolkata', label: 'Bangalore, India', searchTerms: 'bangalore bengaluru india ist' },
  { name: 'Hyderabad', country: 'India', timezone: 'Asia/Kolkata', label: 'Hyderabad, India', searchTerms: 'hyderabad hyd india ist' },
  { name: 'Chennai', country: 'India', timezone: 'Asia/Kolkata', label: 'Chennai, India', searchTerms: 'chennai madras india ist' },
  { name: 'Kolkata', country: 'India', timezone: 'Asia/Kolkata', label: 'Kolkata, India', searchTerms: 'kolkata calcutta india ist' },
  { name: 'Pune', country: 'India', timezone: 'Asia/Kolkata', label: 'Pune, India', searchTerms: 'pune india ist' },
  { name: 'Ahmedabad', country: 'India', timezone: 'Asia/Kolkata', label: 'Ahmedabad, India', searchTerms: 'ahmedabad india ist' },
  { name: 'Jaipur', country: 'India', timezone: 'Asia/Kolkata', label: 'Jaipur, India', searchTerms: 'jaipur india ist' },
  { name: 'Surat', country: 'India', timezone: 'Asia/Kolkata', label: 'Surat, India', searchTerms: 'surat india ist' },

  // Europe
  { name: 'Paris', country: 'France', timezone: 'Europe/Paris', label: 'Paris, France', searchTerms: 'paris france' },
  { name: 'Berlin', country: 'Germany', timezone: 'Europe/Berlin', label: 'Berlin, Germany', searchTerms: 'berlin germany deutschland' },
  { name: 'Munich', country: 'Germany', timezone: 'Europe/Berlin', label: 'Munich, Germany', searchTerms: 'munich munchen germany' },
  { name: 'Hamburg', country: 'Germany', timezone: 'Europe/Berlin', label: 'Hamburg, Germany', searchTerms: 'hamburg germany' },
  { name: 'Frankfurt', country: 'Germany', timezone: 'Europe/Berlin', label: 'Frankfurt, Germany', searchTerms: 'frankfurt germany' },
  { name: 'Madrid', country: 'Spain', timezone: 'Europe/Madrid', label: 'Madrid, Spain', searchTerms: 'madrid spain espana' },
  { name: 'Barcelona', country: 'Spain', timezone: 'Europe/Madrid', label: 'Barcelona, Spain', searchTerms: 'barcelona spain espana' },
  { name: 'Rome', country: 'Italy', timezone: 'Europe/Rome', label: 'Rome, Italy', searchTerms: 'rome roma italy italia' },
  { name: 'Milan', country: 'Italy', timezone: 'Europe/Rome', label: 'Milan, Italy', searchTerms: 'milan milano italy italia' },
  { name: 'Amsterdam', country: 'Netherlands', timezone: 'Europe/Amsterdam', label: 'Amsterdam, Netherlands', searchTerms: 'amsterdam netherlands holland' },
  { name: 'Brussels', country: 'Belgium', timezone: 'Europe/Brussels', label: 'Brussels, Belgium', searchTerms: 'brussels belgium' },
  { name: 'Vienna', country: 'Austria', timezone: 'Europe/Vienna', label: 'Vienna, Austria', searchTerms: 'vienna wien austria' },
  { name: 'Prague', country: 'Czech Republic', timezone: 'Europe/Prague', label: 'Prague, Czech Republic', searchTerms: 'prague praha czech' },
  { name: 'Warsaw', country: 'Poland', timezone: 'Europe/Warsaw', label: 'Warsaw, Poland', searchTerms: 'warsaw warszawa poland' },
  { name: 'Budapest', country: 'Hungary', timezone: 'Europe/Budapest', label: 'Budapest, Hungary', searchTerms: 'budapest hungary' },
  { name: 'Stockholm', country: 'Sweden', timezone: 'Europe/Stockholm', label: 'Stockholm, Sweden', searchTerms: 'stockholm sweden' },
  { name: 'Copenhagen', country: 'Denmark', timezone: 'Europe/Copenhagen', label: 'Copenhagen, Denmark', searchTerms: 'copenhagen denmark' },
  { name: 'Oslo', country: 'Norway', timezone: 'Europe/Oslo', label: 'Oslo, Norway', searchTerms: 'oslo norway' },
  { name: 'Helsinki', country: 'Finland', timezone: 'Europe/Helsinki', label: 'Helsinki, Finland', searchTerms: 'helsinki finland' },
  { name: 'Dublin', country: 'Ireland', timezone: 'Europe/Dublin', label: 'Dublin, Ireland', searchTerms: 'dublin ireland' },
  { name: 'Lisbon', country: 'Portugal', timezone: 'Europe/Lisbon', label: 'Lisbon, Portugal', searchTerms: 'lisbon lisboa portugal' },
  { name: 'Athens', country: 'Greece', timezone: 'Europe/Athens', label: 'Athens, Greece', searchTerms: 'athens athina greece' },
  { name: 'Zurich', country: 'Switzerland', timezone: 'Europe/Zurich', label: 'Zurich, Switzerland', searchTerms: 'zurich switzerland' },

  // Asia
  { name: 'Tokyo', country: 'Japan', timezone: 'Asia/Tokyo', label: 'Tokyo, Japan', searchTerms: 'tokyo japan' },
  { name: 'Osaka', country: 'Japan', timezone: 'Asia/Tokyo', label: 'Osaka, Japan', searchTerms: 'osaka japan' },
  { name: 'Shanghai', country: 'China', timezone: 'Asia/Shanghai', label: 'Shanghai, China', searchTerms: 'shanghai china' },
  { name: 'Beijing', country: 'China', timezone: 'Asia/Shanghai', label: 'Beijing, China', searchTerms: 'beijing peking china' },
  { name: 'Hong Kong', country: 'Hong Kong', timezone: 'Asia/Hong_Kong', label: 'Hong Kong', searchTerms: 'hong kong hk' },
  { name: 'Singapore', country: 'Singapore', timezone: 'Asia/Singapore', label: 'Singapore', searchTerms: 'singapore sg' },
  { name: 'Seoul', country: 'South Korea', timezone: 'Asia/Seoul', label: 'Seoul, South Korea', searchTerms: 'seoul korea' },
  { name: 'Bangkok', country: 'Thailand', timezone: 'Asia/Bangkok', label: 'Bangkok, Thailand', searchTerms: 'bangkok thailand' },
  { name: 'Kuala Lumpur', country: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', label: 'Kuala Lumpur, Malaysia', searchTerms: 'kuala lumpur kl malaysia' },
  { name: 'Jakarta', country: 'Indonesia', timezone: 'Asia/Jakarta', label: 'Jakarta, Indonesia', searchTerms: 'jakarta indonesia' },
  { name: 'Manila', country: 'Philippines', timezone: 'Asia/Manila', label: 'Manila, Philippines', searchTerms: 'manila philippines' },
  { name: 'Taipei', country: 'Taiwan', timezone: 'Asia/Taipei', label: 'Taipei, Taiwan', searchTerms: 'taipei taiwan' },
  { name: 'Dubai', country: 'UAE', timezone: 'Asia/Dubai', label: 'Dubai, UAE', searchTerms: 'dubai uae emirates' },
  { name: 'Abu Dhabi', country: 'UAE', timezone: 'Asia/Dubai', label: 'Abu Dhabi, UAE', searchTerms: 'abu dhabi uae emirates' },
  { name: 'Riyadh', country: 'Saudi Arabia', timezone: 'Asia/Riyadh', label: 'Riyadh, Saudi Arabia', searchTerms: 'riyadh saudi arabia' },
  { name: 'Tel Aviv', country: 'Israel', timezone: 'Asia/Jerusalem', label: 'Tel Aviv, Israel', searchTerms: 'tel aviv israel' },
  { name: 'Istanbul', country: 'Turkey', timezone: 'Europe/Istanbul', label: 'Istanbul, Turkey', searchTerms: 'istanbul turkey' },
  { name: 'Karachi', country: 'Pakistan', timezone: 'Asia/Karachi', label: 'Karachi, Pakistan', searchTerms: 'karachi pakistan' },
  { name: 'Lahore', country: 'Pakistan', timezone: 'Asia/Karachi', label: 'Lahore, Pakistan', searchTerms: 'lahore pakistan' },
  { name: 'Dhaka', country: 'Bangladesh', timezone: 'Asia/Dhaka', label: 'Dhaka, Bangladesh', searchTerms: 'dhaka bangladesh' },
  { name: 'Colombo', country: 'Sri Lanka', timezone: 'Asia/Colombo', label: 'Colombo, Sri Lanka', searchTerms: 'colombo sri lanka' },
  { name: 'Kathmandu', country: 'Nepal', timezone: 'Asia/Kathmandu', label: 'Kathmandu, Nepal', searchTerms: 'kathmandu nepal' },

  // Australia & New Zealand
  { name: 'Sydney', country: 'Australia', timezone: 'Australia/Sydney', label: 'Sydney, Australia', searchTerms: 'sydney australia' },
  { name: 'Melbourne', country: 'Australia', timezone: 'Australia/Melbourne', label: 'Melbourne, Australia', searchTerms: 'melbourne australia' },
  { name: 'Brisbane', country: 'Australia', timezone: 'Australia/Brisbane', label: 'Brisbane, Australia', searchTerms: 'brisbane australia' },
  { name: 'Perth', country: 'Australia', timezone: 'Australia/Perth', label: 'Perth, Australia', searchTerms: 'perth australia' },
  { name: 'Adelaide', country: 'Australia', timezone: 'Australia/Adelaide', label: 'Adelaide, Australia', searchTerms: 'adelaide australia' },
  { name: 'Auckland', country: 'New Zealand', timezone: 'Pacific/Auckland', label: 'Auckland, New Zealand', searchTerms: 'auckland new zealand' },
  { name: 'Wellington', country: 'New Zealand', timezone: 'Pacific/Auckland', label: 'Wellington, New Zealand', searchTerms: 'wellington new zealand' },

  // Canada
  { name: 'Toronto', country: 'Canada', timezone: 'America/Toronto', label: 'Toronto, Canada', searchTerms: 'toronto canada' },
  { name: 'Vancouver', country: 'Canada', timezone: 'America/Vancouver', label: 'Vancouver, Canada', searchTerms: 'vancouver canada' },
  { name: 'Montreal', country: 'Canada', timezone: 'America/Toronto', label: 'Montreal, Canada', searchTerms: 'montreal canada' },
  { name: 'Calgary', country: 'Canada', timezone: 'America/Edmonton', label: 'Calgary, Canada', searchTerms: 'calgary canada' },
  { name: 'Ottawa', country: 'Canada', timezone: 'America/Toronto', label: 'Ottawa, Canada', searchTerms: 'ottawa canada' },

  // South America
  { name: 'São Paulo', country: 'Brazil', timezone: 'America/Sao_Paulo', label: 'São Paulo, Brazil', searchTerms: 'sao paulo brazil brasil' },
  { name: 'Rio de Janeiro', country: 'Brazil', timezone: 'America/Sao_Paulo', label: 'Rio de Janeiro, Brazil', searchTerms: 'rio de janeiro brazil brasil' },
  { name: 'Buenos Aires', country: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires, Argentina', searchTerms: 'buenos aires argentina' },
  { name: 'Lima', country: 'Peru', timezone: 'America/Lima', label: 'Lima, Peru', searchTerms: 'lima peru' },
  { name: 'Bogotá', country: 'Colombia', timezone: 'America/Bogota', label: 'Bogotá, Colombia', searchTerms: 'bogota colombia' },
  { name: 'Santiago', country: 'Chile', timezone: 'America/Santiago', label: 'Santiago, Chile', searchTerms: 'santiago chile' },

  // Mexico
  { name: 'Mexico City', country: 'Mexico', timezone: 'America/Mexico_City', label: 'Mexico City, Mexico', searchTerms: 'mexico city cdmx mexico' },
  { name: 'Guadalajara', country: 'Mexico', timezone: 'America/Mexico_City', label: 'Guadalajara, Mexico', searchTerms: 'guadalajara mexico' },
  { name: 'Monterrey', country: 'Mexico', timezone: 'America/Monterrey', label: 'Monterrey, Mexico', searchTerms: 'monterrey mexico' },

  // Africa
  { name: 'Cairo', country: 'Egypt', timezone: 'Africa/Cairo', label: 'Cairo, Egypt', searchTerms: 'cairo egypt' },
  { name: 'Lagos', country: 'Nigeria', timezone: 'Africa/Lagos', label: 'Lagos, Nigeria', searchTerms: 'lagos nigeria' },
  { name: 'Johannesburg', country: 'South Africa', timezone: 'Africa/Johannesburg', label: 'Johannesburg, South Africa', searchTerms: 'johannesburg south africa' },
  { name: 'Cape Town', country: 'South Africa', timezone: 'Africa/Johannesburg', label: 'Cape Town, South Africa', searchTerms: 'cape town south africa' },
  { name: 'Nairobi', country: 'Kenya', timezone: 'Africa/Nairobi', label: 'Nairobi, Kenya', searchTerms: 'nairobi kenya' },
  { name: 'Casablanca', country: 'Morocco', timezone: 'Africa/Casablanca', label: 'Casablanca, Morocco', searchTerms: 'casablanca morocco' },
];
