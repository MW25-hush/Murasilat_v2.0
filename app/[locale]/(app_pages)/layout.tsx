"use client";
const SideBar = React.lazy(
  () => import("@/components/UI_Organisms/write_page/sidebar")
);
import SideBarSuspense from "@/components/suspenseOrganisms/sideBarSuspense";
import { getDictionary } from "@/i18n-server";
import React, { Suspense, useEffect, useState } from "react";
import { langProps_DASHBOARD, localeProps } from "@/universalTypes";
import Header from "@/components/UI_Organisms/write_page/Header";

export default function DashboardLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
} & localeProps) {
  const [lang, setLang] = useState<langProps_DASHBOARD | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const res = (await getDictionary(locale)).dashboard;
      setLang(res);
    })();
  }, [locale]);

  return (
    <div className="flex  flex-row-reverse ">
      {/* Include shared UI here e.g. a header or sidebar */}

      <Suspense fallback={<SideBarSuspense />}>
        {lang && <SideBar {...lang} />}
      </Suspense>

      {/* //? why does adding the class overflow work in here */}
      <div className="mt-8 overflow-y-auto mr-4 max-h-screen grow  ">
        <Header />
        {children}
      </div>
    </div>
  );
}
