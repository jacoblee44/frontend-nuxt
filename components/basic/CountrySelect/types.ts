import type { CountryCallingCode, CountryCode } from 'libphonenumber-js/types';

export interface ICountrySelectOption {
  iso2: CountryCode;
  iso3: string;
  name: string;
  continent: string;
  region: string;
  capital: string;
  currency: string;
  currency_symbol: string;
  currency_decimal: string;
  dialing_code: string;
  calling_code: CountryCallingCode;
}
