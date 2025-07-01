"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Home.module.css";

export default function AnimatedHome() {
  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* プロフィール写真 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image src="/profile.JPG" alt="プロフィール写真" width={200} height={200} priority className={styles.image} />
      </motion.div>

      {/* キャッチコピー */}
      <motion.h2
        className={styles.catchCopy}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        心地よいUIを作るフロントエンドエンジニア
      </motion.h2>

      {/* タイトル */}
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        KA-I Portfolio
      </motion.h1>

      {/* 説明文 */}
      <motion.p
        className={styles.description}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        React, Next.js, microCMSで作成したモダンなポートフォリオサイトです。
        <br />
        自己紹介と実績一覧をご覧ください。
      </motion.p>

      {/* 技術スタックバッジ */}
      <motion.div
        className={styles.techStack}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <span className={styles.techBadge}>React</span>
        <span className={styles.techBadge}>Next.js</span>
        <span className={styles.techBadge}>TypeScript</span>
        <span className={styles.techBadge}>WordPress</span>
        <span className={styles.techBadge}>microCMS</span>
      </motion.div>

      {/* ボタン */}
      <motion.div
        className={styles.buttonContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link aria-label="自己紹介ページへ" href="/about" className={styles.button}>
            自己紹介を見る
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link aria-label="実績一覧ページへ" href="/portfolio" className={styles.button}>
            実績一覧を見る
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link aria-label="スキル一覧ページへ" href="/skills" className={styles.button}>
            スキル一覧を見る
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
