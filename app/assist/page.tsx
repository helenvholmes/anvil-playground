"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AnvilProvider } from "@servicetitan/anvil2";
import Link from "next/link";

export default function Assist() {
  return (
    <AnvilProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          <Link href="/popover-toolbar">Popover Toolbar</Link>
        </main>
      </div>
    </AnvilProvider>
  );
}
