import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const LanguageToggleButton: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { i18n } = useTranslation();

  return (
    <div className={`flex flex-row items-center`}>
      <div
        className={`pr-4 ${
          i18n.language === "en" ? "text-slate-100" : "text-slate-500"
        }`}
      >
        <Link href={id ? router.asPath : router.pathname} locale="en">
          EN
        </Link>
      </div>
      /
      <div
        className={`pl-4 ${
          i18n.language === "ja" ? "text-slate-100" : "text-slate-500"
        }`}
      >
        <Link href={id ? router.asPath : router.pathname} locale="ja">
          JP
        </Link>
      </div>
    </div>
  );
};

export default LanguageToggleButton;
