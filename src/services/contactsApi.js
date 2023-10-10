import axios from 'axios';
// const BASE_URL = 'https://6521b5f3a4199548356d8138.mockapi.io';
export async function fetchContactsAll() {
  const { data } = await axios.get(
    'https://6521b5f3a4199548356d8138.mockapi.io/contacts'
  );
  return data;
}
