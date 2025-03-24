import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }



  return {
    locale,
    messages: {
      navigation: (await import(`../locales/${locale}/navigation.json`)).default,
      pages: {
        login: (await import(`../locales/${locale}/pages/login.json`)).default,
        home: (await import(`../locales/${locale}/pages/home.json`)).default,
      }
    },
  };
});
