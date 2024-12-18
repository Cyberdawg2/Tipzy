import { Observable } from '@nativescript/core';
import { User } from '../models/user.model';
const QRGenerator = require('nativescript-qr-generator').QRGenerator;

export class QRService extends Observable {
    async generateEmployeeQRCode(employee: User): Promise<string> {
        try {
            const qrData = {
                employeeId: employee.id,
                restaurantId: employee.restaurantId,
                type: 'tip'
            };
            
            const qrGenerator = new QRGenerator();
            const qrCode = await qrGenerator.generateQR(JSON.stringify(qrData));
            return qrCode;
        } catch (error) {
            console.error('QR Generation error:', error);
            throw error;
        }
    }
}