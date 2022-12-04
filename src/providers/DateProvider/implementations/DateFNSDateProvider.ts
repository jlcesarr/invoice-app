import * as fns from 'date-fns';
import * as fnsLocales from 'date-fns/locale';

import { IDateProvider } from '../IDateProvider';

class DateFNSDateProvider implements IDateProvider {
  public locales = fnsLocales;

  toFormat(date: Date, format: string) {
    return fns.format(date, format);
  }

  toLocaleFormat(date: Date, format: string, locale: Locale) {
    return fns.format(date, format, { locale: locale });
  }
}

export default new DateFNSDateProvider();
