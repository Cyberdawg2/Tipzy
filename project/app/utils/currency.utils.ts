export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export const calculateTipTotal = (tips: any[]): number => {
  return tips.reduce((sum, tip) => sum + (tip.amount || 0), 0);
};