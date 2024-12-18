import { firebase } from '@nativescript/firebase-core';
import { getAuth } from '@nativescript/firebase-auth';
import { Observable } from '@nativescript/core';

export class AuthService extends Observable {
    private auth = getAuth(firebase());
    private currentUser: any = null;

    async login(email: string, password: string) {
        try {
            const userCredential = await this.auth.signInWithEmailAndPassword(email, password);
            this.currentUser = userCredential.user;
            return userCredential.user;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async logout() {
        try {
            await this.auth.signOut();
            this.currentUser = null;
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        }
    }

    isAuthenticated(): boolean {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }
}