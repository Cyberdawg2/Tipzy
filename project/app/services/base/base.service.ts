import { Observable } from '@nativescript/core';

export class BaseService extends Observable {
  protected handleError(error: any, context: string): void {
    console.error(`Error in ${context}:`, error);
    this.notify({
      eventName: 'error',
      object: this,
      error: error
    });
  }

  protected notify(data: any): void {
    this.notify(data);
  }
}