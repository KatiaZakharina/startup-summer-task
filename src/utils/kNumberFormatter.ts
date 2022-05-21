export const kNumberFormatter = (num: number) => (num >= 1000 ? (num / 100).toFixed(1) + 'k' : num);
