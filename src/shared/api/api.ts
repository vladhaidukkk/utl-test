import axios from 'axios';

import { API_ENDPOINT } from 'shared/config';

export const api = axios.create({
  baseURL: API_ENDPOINT,
});
