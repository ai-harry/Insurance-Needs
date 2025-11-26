import React from 'react';
import { CalculatorData } from '../../types';
import { InputCard } from '../ui/InputCard';

interface Props {
  data: CalculatorData;
  updateData: (key: keyof CalculatorData, value: number) => void;
}

export const AssetsStep: React.FC<Props> = ({ data, updateData }) => {
  const totalAssets = data.currentSavings + data.existingLifeInsurance + data.retirementFunds;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Step 4</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Existing Assets</h2>
        <p className="text-gray-600 mt-2">
          What do you already have in place that can reduce the need?
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <InputCard
          label="Savings & Investments"
          value={data.currentSavings}
          onChange={(val) => updateData('currentSavings', val)}
          description="Liquid cash available."
        />
        <InputCard
          label="Existing Life Insurance"
          value={data.existingLifeInsurance}
          onChange={(val) => updateData('existingLifeInsurance', val)}
          description="Group or private policies."
        />
        <InputCard
          label="Retirement Funds"
          value={data.retirementFunds}
          onChange={(val) => updateData('retirementFunds', val)}
          description="401k, IRA, etc."
        />
      </div>

       <div className="bg-brand-50 rounded-xl p-6 flex items-center justify-between border border-brand-100 mt-6">
        <div>
          <p className="text-brand-800 font-medium">Total Existing Coverage</p>
        </div>
        <p className="text-2xl font-bold text-green-700">
          - ${totalAssets.toLocaleString()}
        </p>
      </div>
    </div>
  );
};