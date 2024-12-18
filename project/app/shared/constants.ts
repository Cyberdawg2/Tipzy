export const APP_CONSTANTS = {
  ROUTES: {
    LOGIN: 'login',
    DASHBOARD: 'dashboard',
    PROFILE: 'profile',
    SETTINGS: 'settings'
  },
  COLLECTIONS: {
    USERS: 'users',
    TIPS: 'tips',
    RESTAURANTS: 'restaurants'
  },
  EVENTS: {
    TIP_RECEIVED: 'tipReceived',
    AUTH_STATE_CHANGED: 'authStateChanged',
    ERROR_OCCURRED: 'errorOccurred'
  },
  STORAGE_KEYS: {
    USER_DATA: 'userData',
    SETTINGS: 'appSettings'
  }
};

export const ERROR_MESSAGES = {
  GENERAL: 'An unexpected error occurred',
  AUTH: {
    INVALID_CREDENTIALS: 'Invalid email or password',
    USER_NOT_FOUND: 'User not found',
    WEAK_PASSWORD: 'Password should be at least 8 characters'
  },
  NETWORK: {
    NO_CONNECTION: 'No internet connection',
    TIMEOUT: 'Request timed out'
  }
};