import { useTranslations } from 'next-intl';
import Link from "next/link";
export default function LoginPage(){
  const t  = useTranslations('pages.login');
  return (
    <>
      <h1>{t('h1')}</h1>
      <div>Login page</div>
      <Link href={'/en'}>Goto Home page</Link>
    </>
  )
}
