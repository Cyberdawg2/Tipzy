import { validateAmount } from '../../utils/validation.utils';
import { validatePaymentData } from '../../utils/security.utils';
import { BaseService } from '../base/base.service';

export class TipValidationService extends BaseService {
  validateTipData(tipData: any): boolean {
    if (!validatePaymentData(tipData)) {
      this.handleError(new Error('Invalid tip data structure'), 'TipValidationService');
      return false;
    }

    if (!validateAmount(tipData.amount)) {
      this.handleError(new Error('Invalid tip amount'), 'TipValidationService');
      return false;
    }

    return true;
  }
}