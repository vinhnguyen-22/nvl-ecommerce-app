import { useRouter } from 'next/navigation';
import en from '../app/i18n/locales/en/en';
import fa from '../app/i18n/locales/fa';

export const useLanguage = () => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : fa;
  return { t, locale };
};
