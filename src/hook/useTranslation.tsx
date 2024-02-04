import { useCallback } from 'react';
import { useAppSelector } from '@/store';
import en_US from '../i18n/en.json';
import vn_VN from '../i18n/vi.json';

const TRANSLATIONS = { en_US, vn_VN };

export default function useTranslation() {
  const { language } = useAppSelector((state) => state.translation.translate);
  const locale = language;

  const t = useCallback(
    <T extends keyof (typeof TRANSLATIONS)['en_US']>(keyString: T) => TRANSLATIONS[locale][keyString],
    [locale]
  );

  return { t, locale };
}
