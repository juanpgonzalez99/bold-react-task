export const numberToCurrency = (number: number, decimals?: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: decimals ?? 0,
    minimumFractionDigits: decimals ?? 0,
  });

  return formatter.format(number);
};
