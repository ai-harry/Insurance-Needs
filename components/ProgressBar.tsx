import React from 'react';

export const ProgressBar: React.FC<{ currentStep: number; totalSteps: number }> = ({ currentStep, totalSteps }) => {
  // We only show progress for steps 1-4 (The calculation steps)
  if (currentStep < 1 || currentStep > 4) return null;

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 fixed top-0 left-0 z-50">
      <div 
        className="bg-brand-600 h-2 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};