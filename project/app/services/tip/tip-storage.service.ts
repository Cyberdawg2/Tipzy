import { getFirestore } from '@nativescript/firebase-firestore';
import { firebase } from '@nativescript/firebase-core';
import { Tip } from '../../models/tip.model';

export class TipStorageService {
  private db = getFirestore(firebase());

  async saveTip(tip: Partial<Tip>): Promise<void> {
    const tipsRef = this.db.collection('tips');
    await tipsRef.add({
      ...tip,
      timestamp: new Date(),
      status: 'pending'
    });
  }

  async getTipsForEmployee(employeeId: string): Promise<Tip[]> {
    const tipsRef = this.db.collection('tips');
    const query = tipsRef.where('employeeId', '==', employeeId);
    const snapshot = await query.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Tip));
  }

  async updateTipStatus(tipId: string, status: 'pending' | 'completed'): Promise<void> {
    const tipRef = this.db.collection('tips').doc(tipId);
    await tipRef.update({ status });
  }
}