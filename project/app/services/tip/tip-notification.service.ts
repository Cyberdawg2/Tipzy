import { NotificationService } from '../notification/notification.service';
import { formatCurrency } from '../../utils/currency.utils';
import { BaseService } from '../base/base.service';

export class TipNotificationService extends BaseService {
  private notificationService: NotificationService;

  constructor() {
    super();
    this.notificationService = new NotificationService();
  }

  async notifyTipReceived(employeeId: string, amount: number): Promise<void> {
    try {
      const formattedAmount = formatCurrency(amount);
      await this.notificationService.subscribeToTipNotifications(employeeId);
      // Additional notification logic here
    } catch (error) {
      this.handleError(error, 'TipNotificationService');
    }
  }
}