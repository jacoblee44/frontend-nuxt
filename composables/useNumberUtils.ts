export const useNumberUtils = () => {
  const { locale: language } = useI18n();

  const formatNumber = (value: number) => {
    const locale = language.value || 'default';

    return new Intl.NumberFormat(locale).format(value);
  };

  return { formatNumber };
};
