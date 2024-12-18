export const validateAmount = (amount: number): boolean => {
  return amount > 0 && amount <= 10000;
};

export const validatePaymentMethod = (method: string): boolean => {
  const validMethods = ['card', 'paypal', 'venmo'];
  return validMethods.includes(method.toLowerCase());
};

export const validateCurrency = (currency: string): boolean => {
  const validCurrencies = ['USD', 'EUR', 'GBP'];
  return validCurrencies.includes(currency.toUpperCase());
};