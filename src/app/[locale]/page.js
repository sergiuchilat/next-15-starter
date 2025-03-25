import {useTranslations} from "next-intl";
import { Link } from "@/i18n/routing"

export default function Home() {
  const t = useTranslations('pages.home');
  return (
    <>
      <h1>{t('h1')}</h1>
      <Link href="login">Goto Login Page</Link>
    </>
  );
}
