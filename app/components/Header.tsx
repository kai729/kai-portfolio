"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link href="/">KA-I Portfolio</Link>
        </h1>

        {/* ハンバーガーボタン */}
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="メニューを開く">
          ☰
        </button>

        {/* ナビゲーション */}
        <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`}>
          <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>
            自己紹介
          </Link>
          <Link href="/portfolio" className={styles.navLink} onClick={() => setIsOpen(false)}>
            実績一覧
          </Link>
          <Link href="/skills" className={styles.navLink} onClick={() => setIsOpen(false)}>
            スキル一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}
