"use client";

import React from "react";
import { useCreate } from "@/hooks";
import { LandingPageCreator } from "@/components/landing-page";

function Create() {
  const { onCreate } = useCreate();

  return <LandingPageCreator onCreate={onCreate} />;
}

export default Create;
