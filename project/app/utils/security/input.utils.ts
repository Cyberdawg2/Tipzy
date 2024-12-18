export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};

export const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const validateInputLength = (input: string, maxLength: number): boolean => {
  return input.length <= maxLength;
};