export interface Restaurant {
    id: string;
    name: string;
    ownerId: string;
    logo?: string;
    settings: {
        tipPooling: boolean;
        tipPoolingRules?: {
            percentages: { [role: string]: number };
        };
        customBranding: boolean;
    };
    locations?: string[];
}