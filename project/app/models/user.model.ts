export interface User {
    id: string;
    email: string;
    fullName: string;
    role: 'employee' | 'manager';
    restaurantId?: string;
    qrCode?: string;
    paymentInfo?: {
        paypalEmail?: string;
        stripeAccountId?: string;
    };
}

export interface Tip {
    id: string;
    amount: number;
    employeeId: string;
    customerId?: string;
    timestamp: Date;
    restaurantId: string;
    status: 'pending' | 'completed';
}