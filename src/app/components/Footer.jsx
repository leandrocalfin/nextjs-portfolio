"use client";

import React from "react";
import { useLanguage } from "../languageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#33353F] text-white py-12">
      <p className="text-center text-slate-500 text-sm">
        {t.footerText}
      </p>
    </footer>
  );
};

export default Footer;