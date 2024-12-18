import { firebase } from '@nativescript/firebase-core';
import { getMessaging } from '@nativescript/firebase-messaging';

export class NotificationService {
  private messaging = getMessaging(firebase());

  async requestPermission(): Promise<boolean> {
    try {
      const permission = await this.messaging.requestPermission();
      return permission === 'granted';
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  }

  async subscribeToTipNotifications(employeeId: string): Promise<void> {
    try {
      await this.messaging.subscribeToTopic(`tips_${employeeId}`);
    } catch (error) {
      console.error('Error subscribing to notifications:', error);
    }
  }
}