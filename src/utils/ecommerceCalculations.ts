
export interface SimulatorInputs {
  monthlyTraffic: number;
  currentConversionRate: number;
  currentAverageOrder: number;
  targetConversionRate: number;
  newAverageOrder: number;
}

export interface SimulatorResults {
  currentMonthlyRevenue: number;
  currentConversions: number;
  currentRPV: number;
  targetMonthlyRevenue: number;
  targetConversions: number;
  revenueIncrease: number;
  revenueIncreasePercentage: number;
}

export const calculateSimulatorResults = (inputs: SimulatorInputs): SimulatorResults => {
  // Current scenario calculations
  const currentConversions = inputs.monthlyTraffic * (inputs.currentConversionRate / 100);
  const currentMonthlyRevenue = currentConversions * inputs.currentAverageOrder;
  const currentRPV = inputs.monthlyTraffic > 0 ? currentMonthlyRevenue / inputs.monthlyTraffic : 0;

  // Target scenario calculations
  const targetConversions = inputs.monthlyTraffic * (inputs.targetConversionRate / 100);
  const targetMonthlyRevenue = targetConversions * inputs.newAverageOrder;

  // Improvements calculations
  const revenueIncrease = targetMonthlyRevenue - currentMonthlyRevenue;
  const revenueIncreasePercentage = currentMonthlyRevenue > 0 
    ? (revenueIncrease / currentMonthlyRevenue) * 100 
    : 0;

  return {
    currentMonthlyRevenue,
    currentConversions: Math.round(currentConversions),
    currentRPV,
    targetMonthlyRevenue,
    targetConversions: Math.round(targetConversions),
    revenueIncrease,
    revenueIncreasePercentage
  };
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  }).format(amount);
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('fr-FR').format(Math.round(num));
};

export const formatPercentage = (percentage: number): string => {
  const sign = percentage >= 0 ? '+' : '';
  return `${sign}${percentage.toFixed(1)} %`;
};

export const validateInput = (value: number, min: number = 0, max?: number): boolean => {
  if (isNaN(value) || value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
};
