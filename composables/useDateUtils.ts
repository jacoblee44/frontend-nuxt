export const useDateUtils = () => {
  const { locale: language } = useI18n();

  const formatDateTime = (date: string) => {
    const locale = language.value || 'default';

    const formattedDate = new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(
      new Date(date),
    );
    const formattedTime = new Intl.DateTimeFormat(locale, { timeStyle: 'short' }).format(
      new Date(date),
    );

    return `${formattedDate} ${formattedTime}`;
  };

  const formatDate = (date: string) => {
    const locale = language.value || 'default';

    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(date));
  };

  const format24HourTime = (date: string) => {
    const locale = language.value || 'default';

    return new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date(date));
  };

  const formatPeriod = (date: string) => {
    const locale = language.value || 'default';

    const hour12Format = new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      hour12: true,
    }).format(new Date(date));

    return hour12Format.includes('AM') ? 'AM' : 'PM';
  };

  function formatDateInfo(value: string) {
    const locale = language.value || 'default';
    const date = new Date(value);

    const day = new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(date);
    const month = new Intl.DateTimeFormat(locale, { month: 'short' }).format(date);
    const year = new Intl.DateTimeFormat(locale, { year: '2-digit' }).format(date);
    const hour = new Intl.DateTimeFormat(locale, { hour: '2-digit', hour12: false }).format(date);
    const minute = new Intl.DateTimeFormat(locale, { minute: '2-digit' }).format(date);
    const second = new Intl.DateTimeFormat(locale, { second: '2-digit' }).format(date);

    return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
  }

  return { formatDateTime, formatDateInfo, formatDate, format24HourTime, formatPeriod };
};
