
import React from 'react';

interface InputCardProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  prefix?: string;
  suffix?: string;
  description?: string;
}

export const InputCard: React.FC<InputCardProps> = ({
  label,
  value,
  onChange,
  prefix = '$',
  suffix,
  description
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-100 hover:border-brand-300 transition-colors group focus-within:ring-2 focus-within:ring-brand-100 focus-within:border-brand-400">
      <label className="block text-sm font-semibold text-gray-700 mb-1 group-focus-within:text-brand-700 transition-colors">
        {label}
      </label>
      {description && <p className="text-xs text-gray-500 mb-3">{description}</p>}
      <div className="relative">
        {prefix && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-400 sm:text-lg font-medium group-focus-within:text-brand-600">{prefix}</span>
          </div>
        )}
        <input
          type="number"
          min="0"
          className={`
            block w-full 
            ${prefix ? 'pl-8' : 'pl-3'} 
            ${suffix ? 'pr-12' : 'pr-3'} 
            py-3 
            text-brand-900 
            bg-brand-50 
            border-transparent 
            focus:border-brand-500 
            focus:bg-white 
            focus:ring-0 
            rounded-lg 
            sm:text-lg 
            font-medium 
            transition-all
            placeholder-gray-300
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none
            [-moz-appearance:textfield]
          `}
          value={value === 0 ? '' : value}
          placeholder="0"
          onChange={(e) => {
            const val = parseFloat(e.target.value);
            onChange(isNaN(val) ? 0 : val);
          }}
          onWheel={(e) => e.currentTarget.blur()} // Prevent scrolling from changing number
        />
        {suffix && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400 sm:text-sm group-focus-within:text-brand-600">{suffix}</span>
          </div>
        )}
      </div>
    </div>
  );
};
