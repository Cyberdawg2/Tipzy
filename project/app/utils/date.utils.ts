export const getDateRanges = () => {
  const now = new Date();
  const today = now.setHours(0, 0, 0, 0);
  const weekAgo = new Date(today - 7 * 24 * 60 * 60 * 1000);
  const monthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

  return {
    today: new Date(today),
    weekAgo,
    monthAgo
  };
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};