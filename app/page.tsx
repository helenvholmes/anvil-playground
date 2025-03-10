"use client"

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
      </main>
    </div>
    </AnvilProvider>
  );
}
