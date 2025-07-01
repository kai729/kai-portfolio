import { ExternalLink } from "lucide-react";
import Link from "next/link";
import styles from "../components/Skills.module.css";

export default function SkillsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>スキル一覧</h1>

      {/* フロントエンド */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>フロントエンド</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>
            <span className={styles.badge}>React.js</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Next.js</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>React Router DOM</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Material UI</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Skeleton UI</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Vite</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Tailwind CSS</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>CSS Modules</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>SCSS</span>（3年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>HTML</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>CSS</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>JavaScript</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>jQuery</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Framer Motion</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>WordPress</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Movable Type</span>（2年）
          </li>
        </ul>
      </section>

      {/* バックエンド */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>バックエンド</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Node.js</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Express</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>SQLite</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>PHP</span>（3年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Python</span>（1年）
          </li>
        </ul>
      </section>

      {/* テスト */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>テスト</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>
            <span className={styles.badge}>React Testing Library</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Jest</span>（1年）
          </li>
        </ul>
      </section>

      {/* インフラ・ツール */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>インフラ・ツール</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>
            <span className={styles.badge}>microCMS</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>GitHub</span>（3年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Gitlab</span>（2年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>npm/yarn</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Vercel</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Google Analytics</span>（1年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>filezilla</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>VScode</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Dreamweaver</span>（2年）
          </li>
        </ul>
      </section>

      {/* デザイン */}
      <section className={styles.section}>
        <h2 className={styles.subtitle}>デザインツール</h2>
        <ul className={styles.skillList}>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Adobe XD</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Photoshop</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Illustrator</span>（4年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Figma</span>（2年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>Premiere Pro</span>（2年）
          </li>
          <li className={styles.skillItem}>
            <span className={styles.badge}>After Effect</span>（1年）
          </li>
        </ul>
      </section>
      {/* ボタン */}
      <div className={styles.buttonContainer}>
        <Link href="/about" className={styles.githubButton}>
          自己紹介を見る
        </Link>
        <Link href="/portfolio" className={styles.githubButton}>
          実績一覧を見る
        </Link>
        <a href="https://github.com/kai729" target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
          GitHubを見る
          <ExternalLink size={18} style={{ marginLeft: "8px" }} />
        </a>
      </div>
      {/* 戻るボタン */}
      <div className={styles.backButtonContainer}>
        <Link href="/" className={styles.backButton}>
          トップページに戻る
        </Link>
      </div>
    </main>
  );
}
