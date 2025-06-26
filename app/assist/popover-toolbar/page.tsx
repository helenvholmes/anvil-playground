"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { AnvilProvider } from "@servicetitan/anvil2";
import Link from "next/link";

export default function PopoverToolbar() {
  return (
    <AnvilProvider>
      <div className={styles.page}>
        <main className={styles.main}>my popover toolbar will go here</main>
      </div>
    </AnvilProvider>
  );
}
