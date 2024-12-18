import { Observable } from '@nativescript/core';
import { TipService } from '../../services/tip.service';
import { QRService } from '../../services/qr.service';
import { AuthService } from '../../services/auth.service';

export class EmployeeDashboardViewModel extends Observable {
    private tipService: TipService;
    private qrService: QRService;
    private authService: AuthService;

    public dailyTips: number = 0;
    public weeklyTips: number = 0;
    public monthlyTips: number = 0;
    public recentTips: any[] = [];

    constructor() {
        super();
        this.tipService = new TipService();
        this.qrService = new QRService();
        this.authService = new AuthService();
        this.loadDashboardData();
    }

    async loadDashboardData() {
        const currentUser = this.authService.getCurrentUser();
        if (!currentUser) return;

        try {
            const tips = await this.tipService.getTipsForEmployee(currentUser.id);
            this.calculateTipSummaries(tips);
            this.set('recentTips', tips.slice(0, 10)); // Show last 10 tips
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    }

    async showQRCode() {
        const currentUser = this.authService.getCurrentUser();
        if (!currentUser) return;

        try {
            const qrCode = await this.qrService.generateEmployeeQRCode(currentUser);
            // Show QR code in a modal
            // Implementation details for modal display
        } catch (error) {
            console.error('Error generating QR code:', error);
        }
    }

    private calculateTipSummaries(tips: any[]) {
        const now = new Date();
        const today = now.setHours(0, 0, 0, 0);
        const weekAgo = new Date(today - 7 * 24 * 60 * 60 * 1000);
        const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

        this.set('dailyTips', this.sumTips(tips, today));
        this.set('weeklyTips', this.sumTips(tips, weekAgo));
        this.set('monthlyTips', this.sumTips(tips, monthAgo));
    }

    private sumTips(tips: any[], since: number): number {
        return tips
            .filter(tip => new Date(tip.timestamp).getTime() >= since)
            .reduce((sum, tip) => sum + tip.amount, 0);
    }

    async onLogout() {
        try {
            await this.authService.logout();
            // Navigate to login page
        } catch (error) {
            console.error('Logout error:', error);
        }
    }
}