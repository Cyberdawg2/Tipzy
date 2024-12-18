import { User } from '../../models/user.model';
import { encryptSensitiveData } from '../security/encryption.utils';

export const generateQRPayload = (employee: User): string => {
  const payload = {
    employeeId: employee.id,
    restaurantId: employee.restaurantId,
    timestamp: new Date().toISOString(),
    type: 'tip'
  };
  
  return encryptSensitiveData(JSON.stringify(payload));
};

export const validateQRPayload = (payload: string): boolean => {
  try {
    const data = JSON.parse(payload);
    return !!(data.employeeId && data.restaurantId && data.timestamp);
  } catch {
    return false;
  }
};