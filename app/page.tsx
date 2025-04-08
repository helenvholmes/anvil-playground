"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AnvilProvider } from "@servicetitan/anvil2";
import Link from "next/link";

export default function Home() {
  return (
    <AnvilProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          <Link href="/emphasis-table">emphasis table</Link>
          <Link href="/color-tiles">color tiles</Link>
          <Link href="/semantic-color-tiles">semantic color tiles</Link>
          <Link href="/contrast-tiles">color contrast tiles</Link>
          <Link href="/hsl-playground">hsl playground</Link>
          <Link href="/component-playground">component playground</Link>
        </main>
      </div>
    </AnvilProvider>
  );
}
