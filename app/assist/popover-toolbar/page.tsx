"use client";

import Image from "next/image";
import { AnvilProvider } from "@servicetitan/anvil2";
import Link from "next/link";

export default function PopoverToolbar() {
  return (
    <AnvilProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "1rem",
          margin: "auto",
          minWidth: "600px",
          maxWidth: "800px",
          overflowX: "scroll",
        }}
      >
        <Link href="/assist">Back</Link>
        <main>my popover toolbar will go here</main>
      </div>
    </AnvilProvider>
  );
}
