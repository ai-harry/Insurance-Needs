import React from 'react';
import { CalculatorData } from '../../types';
import { InputCard } from '../ui/InputCard';

interface Props {
  data: CalculatorData;
  updateData: (key: keyof CalculatorData, value: number) => void;
}

export const FinalExpensesStep: React.FC<Props> = ({ data, updateData }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Step 3</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Final & Emergency Expenses</h2>
        <p className="text-gray-600 mt-2">
          Medical bills, funeral costs, legal fees, and estate settlement.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <InputCard
          label="Estimated Amount"
          value={data.finalExpenses}
          onChange={(val) => updateData('finalExpenses', val)}
          description="Ballpark figure is typically $10,000 – $30,000."
        />
      </div>

      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex gap-3 items-start max-w-2xl mx-auto mt-8">
        <span className="text-2xl">💡</span>
        <p className="text-sm text-blue-800">
          <strong>Tip:</strong> This fund provides immediate liquidity to your family during the most difficult weeks, ensuring they don't have to dip into long-term savings for immediate costs.
        </p>
      </div>
    </div>
  );
};