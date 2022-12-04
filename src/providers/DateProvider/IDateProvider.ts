export interface IDateProvider {
  toFormat(date: Date, format: string): string;
  toLocaleFormat(date: Date, format: string, locale?: any): string;
}
