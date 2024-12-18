import { TipSummary } from '../../models/tip.model';
import { getDateRanges } from '../../utils/date.utils';
import { calculateTipTotal } from '../../utils/currency.utils';

export class TipCalculationService {
  calculateTipSummaries(tips: any[]): TipSummary {
    const { today, weekAgo, monthAgo } = getDateRanges();

    const dailyTips = tips.filter(tip => 
      new Date(tip.timestamp).getTime() >= today.getTime()
    );

    const weeklyTips = tips.filter(tip => 
      new Date(tip.timestamp).getTime() >= weekAgo.getTime()
    );

    const monthlyTips = tips.filter(tip => 
      new Date(tip.timestamp).getTime() >= monthAgo.getTime()
    );

    return {
      daily: calculateTipTotal(dailyTips),
      weekly: calculateTipTotal(weeklyTips),
      monthly: calculateTipTotal(monthlyTips),
      count: tips.length
    };
  }
}