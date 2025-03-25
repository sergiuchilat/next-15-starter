import Button from "@mui/material/Button";
import {useRouter, usePathname} from 'next/navigation';
import {useLocale} from 'use-intl';
import {locales} from "@/i18n/config";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/routing";

export default function LanguageSwitcher() {
  const t = useTranslations('global');
  const router = useRouter();
  const locale = useLocale()
  const pathname = usePathname();

  const changeLanguage = (lng) => {
    const url = pathname.replace(`/${locale}`, `/${lng}`);
    router.push(url);
  }

  return (
    <>
      {
        locales.map((lng) => (
          <Link href={lng} onClick={() => changeLanguage(lng)} key={lng}>{t(`languages.${lng}`)}</Link>
        ))
      }
    </>
  );
}
