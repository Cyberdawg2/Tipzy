export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};

export const maskEmail = (email: string): string => {
  const [username, domain] = email.split('@');
  return `${username.charAt(0)}${'*'.repeat(username.length - 2)}${username.charAt(username.length - 1)}@${domain}`;
};

export const validatePaymentData = (data: any): boolean => {
  const requiredFields = ['amount', 'employeeId', 'timestamp'];
  return requiredFields.every(field => data.hasOwnProperty(field) && data[field] !== null);
};