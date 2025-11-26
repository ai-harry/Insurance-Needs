
export interface CalculatorData {
  // Step 1: Income Replacement
  annualIncome: number;
  yearsToCover: number;
  
  // Step 2: Debt
  mortgageBalance: number;
  otherDebts: number; // Car, personal, credit cards combined
  
  // Step 3: Final Expenses
  finalExpenses: number;
  
  // Step 4: Assets
  currentSavings: number;
  existingLifeInsurance: number;
  retirementFunds: number;
}

export const INITIAL_DATA: CalculatorData = {
  annualIncome: 0,
  yearsToCover: 0,
  mortgageBalance: 0,
  otherDebts: 0,
  finalExpenses: 0,
  currentSavings: 0,
  existingLifeInsurance: 0,
  retirementFunds: 0,
};

export enum Step {
  INTRO = 0,
  INCOME = 1,
  DEBT = 2,
  FINAL_EXPENSES = 3,
  ASSETS = 4,
  RESULTS = 5,
}
