import { User } from '../models/user.model';

export const generateQRData = (employee: User): string => {
  const qrData = {
    employeeId: employee.id,
    restaurantId: employee.restaurantId,
    type: 'tip',
    timestamp: new Date().toISOString()
  };
  
  return JSON.stringify(qrData);
};

export const parseQRData = (qrString: string): any => {
  try {
    return JSON.parse(qrString);
  } catch (error) {
    console.error('Error parsing QR data:', error);
    return null;
  }
};