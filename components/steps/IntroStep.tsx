
import React from 'react';
import { Button } from '../ui/Button';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export const IntroStep: React.FC<Props> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-8 animate-fade-in-up">
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Secure Your Legacy <br />
          <span className="text-brand-600">Empower Generations</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Life insurance builds wealth and protects your family. Find out exactly how much coverage you need to ensure your loved ones thrive, no matter what.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl px-4 mt-8">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-400 group cursor-default">
          <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
            <Users size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Income Replacement</h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Ensure your family maintains their current lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-400 group cursor-default">
          <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
            <TrendingUp size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Cover Debts</h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Clear mortgages, loans, and other obligations instantly.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-brand-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-brand-400 group cursor-default">
          <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
            <ShieldCheck size={24} />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Final Expenses</h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Account for medical bills and peace of mind.</p>
        </div>
      </div>

      <div className="pt-8">
        <Button onClick={onStart} className="text-lg px-12 py-4 shadow-brand-200/50 shadow-xl">
          Start Your Assessment
        </Button>
        <p className="mt-4 text-sm text-gray-400">Takes less than 2 minutes</p>
      </div>
    </div>
  );
};
