import { BaseService } from '../base/base.service';

export class ErrorHandlerService extends BaseService {
  private static instance: ErrorHandlerService;

  private constructor() {
    super();
  }

  static getInstance(): ErrorHandlerService {
    if (!ErrorHandlerService.instance) {
      ErrorHandlerService.instance = new ErrorHandlerService();
    }
    return ErrorHandlerService.instance;
  }

  handleError(error: any, context: string): void {
    console.error(`Error in ${context}:`, error);
    
    let userMessage = 'An unexpected error occurred';
    
    if (error.code) {
      switch (error.code) {
        case 'auth/wrong-password':
          userMessage = 'Invalid password';
          break;
        case 'auth/user-not-found':
          userMessage = 'User not found';
          break;
        case 'auth/invalid-email':
          userMessage = 'Invalid email address';
          break;
        default:
          userMessage = error.message || userMessage;
      }
    }

    this.notify({
      eventName: 'errorOccurred',
      object: this,
      data: {
        message: userMessage,
        technical: error
      }
    });
  }
}