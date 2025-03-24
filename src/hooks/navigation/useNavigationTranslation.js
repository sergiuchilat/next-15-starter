import { useTranslation } from "react-i18next";

const useNavigationTranslation = () => {
  const { t } = useTranslation("navigation");

  return t;
};

export default useNavigationTranslation;
