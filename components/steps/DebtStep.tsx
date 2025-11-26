import React from 'react';
import { CalculatorData } from '../../types';
import { InputCard } from '../ui/InputCard';

interface Props {
  data: CalculatorData;
  updateData: (key: keyof CalculatorData, value: number) => void;
}

export const DebtStep: React.FC<Props> = ({ data, updateData }) => {
  const totalDebts = data.mortgageBalance + data.otherDebts;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <span className="text-brand-600 font-bold uppercase tracking-wider text-sm">Step 2</span>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">Outstanding Debts</h2>
        <p className="text-gray-600 mt-2">
          Clear the burden so your family can live debt-free.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <InputCard
          label="Mortgage Balance"
          value={data.mortgageBalance}
          onChange={(val) => updateData('mortgageBalance', val)}
          description="Remaining principal on your home."
        />
        <InputCard
          label="Other Debts"
          value={data.otherDebts}
          onChange={(val) => updateData('otherDebts', val)}
          description="Car loans, personal loans, credit cards."
        />
      </div>

       <div className="bg-brand-50 rounded-xl p-6 flex items-center justify-between border border-brand-100 mt-6">
        <div>
          <p className="text-brand-800 font-medium">Total Debt to Clear</p>
        </div>
        <p className="text-2xl font-bold text-brand-700">
          ${totalDebts.toLocaleString()}
        </p>
      </div>
    </div>
  );
};