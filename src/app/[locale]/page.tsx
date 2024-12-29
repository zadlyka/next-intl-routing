import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LangSwitcher } from "@/components/i18n/lang-switcher";

export default function HomePage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <LangSwitcher mini />
      <h1>{t("title")}</h1>
      <Link href="/about">{t("about")}</Link>
    </div>
  );
}
