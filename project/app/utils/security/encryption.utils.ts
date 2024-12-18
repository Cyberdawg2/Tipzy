import { sanitizeInput } from './input.utils';

export const hashData = (data: string): string => {
  // Simple hash function for demo purposes
  return Buffer.from(data).toString('base64');
};

export const encryptSensitiveData = (data: string): string => {
  const sanitizedData = sanitizeInput(data);
  return hashData(sanitizedData);
};

export const maskSensitiveData = (data: string, showLast: number = 4): string => {
  if (data.length <= showLast) return data;
  return '*'.repeat(data.length - showLast) + data.slice(-showLast);
};