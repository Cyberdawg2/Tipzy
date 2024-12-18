export const formatCurrency = (amount: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

export const parseCurrencyAmount = (value: string): number => {
  return parseFloat(value.replace(/[^0-9.-]+/g, ''));
};

export const roundToTwoDecimals = (amount: number): number => {
  return Math.round(amount * 100) / 100;
};