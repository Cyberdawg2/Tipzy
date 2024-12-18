export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return `${str.substring(0, length)}...`;
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const generateUniqueId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};