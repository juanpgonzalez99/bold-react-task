import { numberToCurrency } from './currency';

export const transactionDataToModel = (transactionData: any) => {
  return {
    date: new Date(transactionData.date).toLocaleString('en-US'),
    amount: numberToCurrency(Number(transactionData.amount)),
    cardNumber: `**** **** **** ${transactionData.cardNumber
      .replace(/-/g, '')
      .slice(-4)}`,
    isSuccessful: transactionData.isSuccessful,
    isDataphone: transactionData.isDataphone,
    id: transactionData.id,
  };
};

export const sortTransactionByDate = (transactionsData: any) => {
  const sorted = transactionsData.sort(function (a: any, b: any) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return sorted;
};
