"use client";
import Image from "next/image";
import { Blurhash } from "react-blurhash";

export default function Home() {
  const blurhashCode = "LXDmHv%MS4S$_Nofofs:?vWBt7xu";
  return <Blurhash hash={blurhashCode} />;
}
