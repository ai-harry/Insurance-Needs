import React from 'react';
import { CalculatorData } from '../../types';
import { InputCard } from '../ui/InputCard';

interface Props {
  data: CalculatorData;
  updateData: (key: keyof CalculatorData, value: number) => void;
}

export const IncomeStep: React.FC<Props> = ({ data, updateData }) => {
  const totalReplacement = data.annualIncome * data.yearsToCover;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Step 1</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Income Replacement Needs</h2>
        <p className="text-gray-600 mt-2">
          How much income do your family members need to maintain their current lifestyle?
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputCard
          label="Annual Income Needed"
          value={data.annualIncome}
          onChange={(val) => updateData('annualIncome', val)}
          description="The yearly amount your family relies on."
        />
        <InputCard
          label="Years to Cover"
          value={data.yearsToCover}
          onChange={(val) => updateData('yearsToCover', val)}
          prefix=""
          suffix="Years"
          description="Until kids are independent or retirement."
        />
      </div>

      <div className="bg-brand-50 rounded-xl p-6 flex items-center justify-between border border-brand-100 mt-6">
        <div>
          <p className="text-brand-800 font-medium">Subtotal Calculation</p>
          <p className="text-sm text-brand-600">{data.annualIncome.toLocaleString()} × {data.yearsToCover} years</p>
        </div>
        <p className="text-2xl font-bold text-brand-700">
          ${totalReplacement.toLocaleString()}
        </p>
      </div>
    </div>
  );
};