import { checkError, client } from './client.js';

export async function getCountries() {
  const resp = await client.from('countries').select('*');
  //   console.log('getting countries', resp);
  return checkError(resp);
}
