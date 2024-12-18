import { Observable } from '@nativescript/core';
import { TipSummary } from '../../../models/tip.model';
import { formatCurrency } from '../../../utils/currency.utils';

export class TipSummaryComponent extends Observable {
  private _summary: TipSummary;

  constructor(summary: TipSummary) {
    super();
    this._summary = summary;
  }

  get formattedDaily(): string {
    return formatCurrency(this._summary.daily);
  }

  get formattedWeekly(): string {
    return formatCurrency(this._summary.weekly);
  }

  get formattedMonthly(): string {
    return formatCurrency(this._summary.monthly);
  }
}