import { useState, useEffect } from 'react';
import { TimeConverter } from './components/TimeConverter';
import { CurrentTimeChecker } from './components/CurrentTimeChecker';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2 py-6">
          <h1 className="text-4xl">🌍 City Time Converter</h1>
          <p className="text-gray-600">Check current times and convert between timezones</p>
        </div>

        {/* Current Time Checker */}
        <CurrentTimeChecker />

        {/* Time Converter */}
        <TimeConverter />
      </div>
    </div>
  );
}
