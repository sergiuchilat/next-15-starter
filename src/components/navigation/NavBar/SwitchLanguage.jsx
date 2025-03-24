import Button from "@mui/material/Button";
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'use-intl';

export default function SwitchLanguage () {
  const router = useRouter();
  const locale = useLocale()
  const pathname = usePathname();


  const changeLanguage = (lng) => {
    const url = pathname.replace(`/${locale}`, `/${lng}`);
    router.push(url);
  }

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => changeLanguage('en')}>EN</Button>
      <Button variant="contained" color="primary" onClick={() => changeLanguage('ro')}>RO</Button>
      <Button variant="contained" color="primary" onClick={() => changeLanguage('ru')}>RU</Button>
    </>
  );
}
