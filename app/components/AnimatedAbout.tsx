"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "./About.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AnimatedAbout() {
  return (
    <motion.main
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        自己紹介
      </motion.h1>

      <div className={styles.profileContainer}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/profile02.jpg"
            alt="プロフィール写真"
            width={200}
            height={200}
            priority
            className={styles.profileImage}
          />
        </motion.div>

        <motion.p
          className={styles.text}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          こんにちは！カイトです。
          <br />
          <span className={styles.highlight}>React</span> と <span className={styles.highlight}>TypeScript</span>{" "}
          が大好きなフロントエンドエンジニアです。
          <br />
          <br />
          現在は、コンポーネント設計・UI/UXを意識したサイト制作をメインに取り組んでいます。アニメーション・ページ遷移・状態管理を活用し、
          <span className={styles.highlight}>「気持ちよく操作できるアプリ」</span>を作ることが得意です。
          <br />
          <br />
          使用技術は、React / Next.js / TypeScript / microCMS / CSS Modules / Framer Motion など。
          最近はデザインとコードを両立させるモダン開発に特に興味があります。
          <br />
          <br />
          今後はさらに<span className={styles.highlight}>E2Eテストやパフォーマンス改善</span>にも力を入れて、
          より高品質なアプリケーション開発を目指しています。
          <br />
          <br />
          趣味はコーヒー・ドライブ・映画鑑賞・旅行。
          <br />
          外に出掛けるのも家でゆっくりするのも好きです！
        </motion.p>

        {/* ボタン */}
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/portfolio" className={styles.githubButton}>
              実績一覧を見る
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/skills" className={styles.githubButton}>
              スキル一覧を見る
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <a
              href="https://github.com/kai729"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              GitHubを見る
              <ExternalLink size={18} style={{ marginLeft: "8px" }} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 戻るボタン */}
      <motion.div
        className={styles.backButtonContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        <Link href="/" className={styles.backButton}>
          トップページに戻る
        </Link>
      </motion.div>
    </motion.main>
  );
}
