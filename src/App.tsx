import { useEffect, useState } from 'react';
import Card from './components/card/Card';
import Filters from './components/filters/Filters';
import Navbar from './components/navbar/Navbar';
import TabSelector from './components/tab-selector/TabSelector';
import TableContainer from './components/table/container/TableContainer';
import Table from './components/table/Table';
import { getNumDaysBetweenToday } from './services/format/date';
import {
  sortTransactionByDate,
  transactionDataToModel,
} from './services/format/transaction';
import { getBoldTransactions } from './services/transactions/getBoldTransactions';

function App() {
  const [transactionsData, setTransactionsData] = useState<BoldTransaction[]>(
    []
  );
  const [transactionsFilteredData, setTransactionsFilteredData] = useState<
    BoldTransaction[]
  >([]);

  const [filter, setFilter] = useState<string>('all');
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(1500000);

  const tabs = ['Hoy', 'Este mes', 'Este año'];

  const paymentMethodFilter = (
    filterProperty: string,
    transactionData: BoldTransaction[]
  ) => {
    switch (filterProperty) {
      case 'dataphone':
        setTransactionsFilteredData(
          transactionData.filter((transaction) => transaction.isDataphone)
        );
        break;
      case 'paymentLink':
        setTransactionsFilteredData(
          transactionData.filter((transaction) => !transaction.isDataphone)
        );
        break;
      case 'all':
      default:
        setTransactionsFilteredData(transactionData);
        break;
    }
  };

  const timeFrameFilter = (
    filterIndex: number,
    transactionData: BoldTransaction[]
  ) => {
    debugger;
    switch (filterIndex) {
      case 0:
        paymentMethodFilter(
          filter,
          transactionsData.filter(
            (transaction) => getNumDaysBetweenToday(transaction.date) <= 1
          )
        );
        break;
      case 1:
        paymentMethodFilter(
          filter,
          transactionsData.filter(
            (transaction) => getNumDaysBetweenToday(transaction.date) <= 30
          )
        );
        break;
      case 2:
      default:
        paymentMethodFilter(
          filter,
          transactionsData.filter(
            (transaction) => getNumDaysBetweenToday(transaction.date) <= 365
          )
        );
        break;
    }
  };

  const getSelectedTab = (tabIndex: number): void => {
    setTabIndex(tabIndex);
    timeFrameFilter(tabIndex, transactionsData);
  };

  const getCurrentFilter = (filter: string): void => {
    setFilter(filter);
    timeFrameFilter(tabIndex, transactionsData);
  };

  const fetchTransactionsData = async () => {
    const transactionsFetchData = await getBoldTransactions();
    if (transactionsFetchData[0]) {
      const transactionsSortedData = sortTransactionByDate(
        transactionsFetchData
      );
      const transactionsFormattedData = transactionsSortedData.map(
        (transaction: any) => {
          return transactionDataToModel(transaction);
        }
      );
      setTransactionsData(transactionsFormattedData);
    }
  };

  const init = async () => {
    await fetchTransactionsData();
    getSelectedTab(2);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="bg-background w-screen h-fit pb-10">
      <Navbar />
      <section className="grid grid-cols-1 md:grid-cols-bold-layout space-x-0 space-y-4 md:space-x-8 md:space-y-0 w-full h-fit px-12 py-8">
        <Card
          date={transactionsFilteredData[0]?.date}
          amount={totalAmount}
          currentLabel={tabs[tabIndex]}
        />
        <div>
          <TabSelector sendSelectedTabToParent={getSelectedTab} tabs={tabs} />
          <Filters sendCurrentFilterToParent={getCurrentFilter} />
        </div>
      </section>
      <section className="w-full h-table px-10">
        <TableContainer currentLabel={tabs[tabIndex]}>
          <Table transactions={transactionsFilteredData} />
        </TableContainer>
      </section>
    </div>
  );
}

export default App;
