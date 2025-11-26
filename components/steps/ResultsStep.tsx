
import React from 'react';
import { CalculatorData } from '../../types';
import { Button } from '../ui/Button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Phone } from 'lucide-react';

interface Props {
  data: CalculatorData;
  onReset: () => void;
}

export const ResultsStep: React.FC<Props> = ({ data, onReset }) => {
  const incomeNeeds = data.annualIncome * data.yearsToCover;
  const debtNeeds = data.mortgageBalance + data.otherDebts;
  const finalExpenses = data.finalExpenses;
  
  const totalGrossNeeds = incomeNeeds + debtNeeds + finalExpenses;
  const totalAssets = data.currentSavings + data.existingLifeInsurance + data.retirementFunds;
  
  const netInsuranceNeed = Math.max(0, totalGrossNeeds - totalAssets);
  
  // Prepare data for comparison
  const summaryData = [
    { name: 'Total Needs', amount: totalGrossNeeds },
    { name: 'Existing Assets', amount: totalAssets },
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Your Coverage Gap</h2>
        <p className="text-gray-600 mt-2">Based on your family's specific needs</p>
      </div>

      {/* Hero Result Card */}
      <div className="bg-brand-600 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-500 to-brand-800 opacity-50 z-0"></div>
        <div className="relative z-10">
          <p className="text-brand-100 uppercase tracking-widest font-semibold text-sm mb-2">Recommended Life Insurance Coverage</p>
          <div className="text-5xl md:text-6xl font-bold mb-2">
            ${netInsuranceNeed.toLocaleString()}
          </div>
          <p className="text-brand-200 text-sm max-w-md mx-auto">
            This amount bridges the gap between what your family needs to survive and thrive, and what you currently have.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Breakdown List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h3 className="font-semibold text-gray-800">Calculation Summary</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center text-gray-600">
              <span>Income Replacement ({data.yearsToCover} yrs)</span>
              <span className="font-medium text-gray-900">${incomeNeeds.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span>Mortgage & Debts</span>
              <span className="font-medium text-gray-900">${debtNeeds.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-gray-600">
              <span>Final Expenses</span>
              <span className="font-medium text-gray-900">${finalExpenses.toLocaleString()}</span>
            </div>
            <div className="h-px bg-gray-200 my-2"></div>
            <div className="flex justify-between items-center text-green-600">
              <span>Less: Existing Assets</span>
              <span className="font-medium">-${totalAssets.toLocaleString()}</span>
            </div>
            <div className="h-px bg-gray-200 my-2"></div>
             <div className="flex justify-between items-center text-brand-700 text-lg font-bold">
              <span>Net Insurance Need</span>
              <span>${netInsuranceNeed.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="h-[300px] w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="text-xs text-gray-400 mb-2 text-center">Comparison of Needs vs. Assets</div>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={summaryData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickFormatter={(val) => `$${(val/1000)}k`} />
              <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12}} />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Amount']}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]} barSize={40}>
                {summaryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#5b1484' : '#22c55e'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col items-center justify-center pt-8 space-y-4">
        <Button 
          onClick={(e) => e.preventDefault()} 
          className="w-full md:w-auto text-lg px-8 py-4 shadow-xl shadow-brand-200 cursor-default"
        >
          <Phone className="w-5 h-5 mr-2" />
          Get a Free Consultation
        </Button>
        <button onClick={onReset} className="text-gray-400 hover:text-brand-600 text-sm underline">
          Start Over
        </button>
      </div>
    </div>
  );
};
