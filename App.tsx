import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Button } from './components/ui/Button';
import { ProgressBar } from './components/ProgressBar';
import { CalculatorData, INITIAL_DATA, Step } from './types';
import { IntroStep } from './components/steps/IntroStep';
import { IncomeStep } from './components/steps/IncomeStep';
import { DebtStep } from './components/steps/DebtStep';
import { FinalExpensesStep } from './components/steps/FinalExpensesStep';
import { AssetsStep } from './components/steps/AssetsStep';
import { ResultsStep } from './components/steps/ResultsStep';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(Step.INTRO);
  const [data, setData] = useState<CalculatorData>(INITIAL_DATA);

  const updateData = (key: keyof CalculatorData, value: number) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, Step.RESULTS));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, Step.INTRO));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setData(INITIAL_DATA);
    setCurrentStep(Step.INTRO);
  };

  const renderStep = () => {
    switch (currentStep) {
      case Step.INTRO:
        return <IntroStep onStart={nextStep} />;
      case Step.INCOME:
        return <IncomeStep data={data} updateData={updateData} />;
      case Step.DEBT:
        return <DebtStep data={data} updateData={updateData} />;
      case Step.FINAL_EXPENSES:
        return <FinalExpensesStep data={data} updateData={updateData} />;
      case Step.ASSETS:
        return <AssetsStep data={data} updateData={updateData} />;
      case Step.RESULTS:
        return <ResultsStep data={data} onReset={reset} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-brand-200 selection:text-brand-900 flex flex-col">
      {/* Header */}
      <header className="bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          {currentStep !== Step.INTRO && currentStep !== Step.RESULTS && (
             <div className="hidden md:block text-sm font-medium text-gray-500">
               Step {currentStep} of 4
             </div>
          )}
        </div>
        <ProgressBar currentStep={currentStep} totalSteps={4} />
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-start pt-8 pb-12 px-4 sm:px-6">
        <div className="w-full max-w-4xl">
          {renderStep()}
        </div>
      </main>

      {/* Navigation Footer (Sticky for steps 1-4) */}
      {currentStep > Step.INTRO && currentStep < Step.RESULTS && (
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-30">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Button variant="secondary" onClick={prevStep} className="px-4">
              <ChevronLeft size={20} /> Back
            </Button>
            
            <Button onClick={nextStep} className="px-8">
              {currentStep === Step.ASSETS ? 'Calculate Results' : 'Next Step'} <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      )}
      
      {/* Basic Footer */}
      <footer className="bg-brand-900 text-brand-100 py-8 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p className="mb-2">Thrive Financial &copy; {new Date().getFullYear()}</p>
          <p className="opacity-60 text-xs">
            This tool provides an estimate for informational purposes only. <br/>
            Please consult with a Thrive Financial professional for a personalized assessment.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;