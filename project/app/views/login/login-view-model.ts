import { Observable } from '@nativescript/core';
import { AuthService } from '../../services/auth.service';

export class LoginViewModel extends Observable {
    private authService: AuthService;
    public email: string = '';
    public password: string = '';
    public isLoading: boolean = false;

    constructor() {
        super();
        this.authService = new AuthService();
    }

    async onLogin() {
        if (!this.email || !this.password) {
            // Show error message
            return;
        }

        this.set('isLoading', true);

        try {
            await this.authService.login(this.email, this.password);
            // Navigate to appropriate dashboard based on user role
        } catch (error) {
            console.error('Login failed:', error);
            // Show error message to user
        } finally {
            this.set('isLoading', false);
        }
    }
}