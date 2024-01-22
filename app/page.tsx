"use client";

import LandingPage from "@/components/LandingPage";
import useLanguage from "@/contexts/NavContext";
import { useState } from "react";

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [active, setActive] = useState<number>(0);

  return <LandingPage />;
}
