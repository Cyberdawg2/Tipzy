import { Frame } from '@nativescript/core';
import { BaseService } from '../base/base.service';

export class NavigationService extends BaseService {
  private static instance: NavigationService;

  private constructor() {
    super();
  }

  static getInstance(): NavigationService {
    if (!NavigationService.instance) {
      NavigationService.instance = new NavigationService();
    }
    return NavigationService.instance;
  }

  navigate(page: string, context?: any): void {
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: `views/${page}/${page}-page`,
      context: context,
      clearHistory: false
    });
  }

  navigateWithClearHistory(page: string, context?: any): void {
    const frame = Frame.topmost();
    frame.navigate({
      moduleName: `views/${page}/${page}-page`,
      context: context,
      clearHistory: true
    });
  }

  goBack(): void {
    const frame = Frame.topmost();
    if (frame.canGoBack()) {
      frame.goBack();
    }
  }
}