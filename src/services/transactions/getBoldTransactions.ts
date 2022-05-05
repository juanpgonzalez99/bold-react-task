import axios from 'axios';

export async function getBoldTransactions() {
  try {
    const { data } = await axios.get(
      'https://6271d52425fed8fcb5eb6ed1.mockapi.io/bold/api/sales'
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      alert(error.message);
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}
