import {DateTime} from 'luxon';
import {createContext} from 'react';
export const DateContext = createContext(
  DateTime.now().setLocale('es').setZone('America/Costa_Rica')
);
