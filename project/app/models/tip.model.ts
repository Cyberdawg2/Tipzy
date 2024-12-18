export interface Tip {
    id: string;
    amount: number;
    employeeId: string;
    customerId?: string;
    timestamp: Date;
    restaurantId: string;
    status: 'pending' | 'completed';
    paymentMethod: 'card' | 'paypal';
    note?: string;
}

export interface TipSummary {
    daily: number;
    weekly: number;
    monthly: number;
    count: number;
}