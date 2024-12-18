export interface ErrorDetails {
  code: string;
  message: string;
  technical?: any;
}

export const formatErrorMessage = (error: any): ErrorDetails => {
  if (typeof error === 'string') {
    return {
      code: 'GENERIC_ERROR',
      message: error
    };
  }

  if (error.code) {
    switch (error.code) {
      case 'auth/wrong-password':
        return {
          code: error.code,
          message: 'Invalid password',
          technical: error
        };
      case 'auth/user-not-found':
        return {
          code: error.code,
          message: 'User not found',
          technical: error
        };
      default:
        return {
          code: error.code,
          message: error.message || 'An unexpected error occurred',
          technical: error
        };
    }
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: 'An unexpected error occurred',
    technical: error
  };
};