import { firebase } from '@nativescript/firebase-core';
import { getFirestore } from '@nativescript/firebase-firestore';
import { Tip } from '../models/user.model';

export class TipService {
    private db = getFirestore(firebase());

    async createTip(tipData: Partial<Tip>) {
        try {
            const tipsRef = this.db.collection('tips');
            await tipsRef.add({
                ...tipData,
                timestamp: new Date(),
                status: 'pending'
            });
        } catch (error) {
            console.error('Error creating tip:', error);
            throw error;
        }
    }

    async getTipsForEmployee(employeeId: string) {
        try {
            const tipsRef = this.db.collection('tips');
            const query = tipsRef.where('employeeId', '==', employeeId);
            const snapshot = await query.get();
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching tips:', error);
            throw error;
        }
    }
}