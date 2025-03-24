import {useTranslations} from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations('pages.home');
  return (
    <>
      <h1>{t('h1')}</h1>
      <Link href="/en/login">Goto Login Page</Link>
    </>
  );
}
