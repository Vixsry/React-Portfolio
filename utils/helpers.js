export const formatNumber = (number) => {
  return number.toLocaleString();
};

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};