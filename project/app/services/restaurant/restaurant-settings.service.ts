import { getFirestore } from '@nativescript/firebase-firestore';
import { firebase } from '@nativescript/firebase-core';
import { Restaurant } from '../../models/restaurant.model';
import { BaseService } from '../base/base.service';

export class RestaurantSettingsService extends BaseService {
  private db = getFirestore(firebase());

  async getRestaurantSettings(restaurantId: string): Promise<Restaurant['settings']> {
    try {
      const doc = await this.db.collection('restaurants').doc(restaurantId).get();
      const data = doc.data() as Restaurant;
      return data.settings;
    } catch (error) {
      this.handleError(error, 'RestaurantSettingsService');
      return {
        tipPooling: false,
        customBranding: false
      };
    }
  }
}