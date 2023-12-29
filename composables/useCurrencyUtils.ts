export const useCurrencyUtils = () => {
  const { locale: language } = useI18n();

  const formatCurrency = (value: number) => {
    const locale = language.value || 'default';

    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR',
    }).format(value);
  };

  return { formatCurrency };
};
