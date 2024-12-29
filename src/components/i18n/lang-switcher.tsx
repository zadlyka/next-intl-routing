"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";
import id from "./id-flag.svg";
import en from "./en-flag.svg";

export function LangSwitcher({ mini = false }: { mini?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLanguageChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className={cn(mini ? "w-[50px] pl-2 pr-1" : "w-[100px]")}>
        <SelectValue placeholder="Language" asChild>
          <div className={cn("flex gap-2 items-center")}>
            <Image
              src={currentLocale === "id" ? id : en}
              className="h-5"
              alt={`${currentLocale} flag`}
            />
            {mini ? null : <p>{currentLocale?.toUpperCase()}</p>}
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="en">
          <div className="flex gap-2 items-center">
            <Image src={en} className="h-5" alt="English flag" />
            <span>English</span>
          </div>
        </SelectItem>
        <SelectItem className="flex gap-2 items-center" value="id">
          <div className="flex gap-2 items-center">
            <Image src={id} className="h-5" alt="Indonesian flag" />
            <span>Indonesia</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
