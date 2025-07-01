import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { fetchPortfolio } from "../../lib/microcms";
import styles from "../components/Portfolio.module.css";

export const metadata = {
  title: "実績一覧 | KA-I Portfolio",
  description: "カイトがこれまでに制作した実績一覧をご覧いただけます。",
};

export default async function PortfolioPage() {
  const data = await fetchPortfolio();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>実績一覧</h1>
      <div className={styles.grid}>
        {data.contents.map((item: any) => (
          <Link href={`/portfolio/${item.slug}`} key={item.id} className={styles.cardLink}>
            <div className={styles.card}>
              <div className={styles.pcFrame}>
                <div className={styles.pcHeader}>
                  <div className={`${styles.pcDot} ${styles.dotRed}`}></div>
                  <div className={`${styles.pcDot} ${styles.dotYellow}`}></div>
                  <div className={`${styles.pcDot} ${styles.dotGreen}`}></div>
                </div>
                {item.img && <img src={item.img.url} alt={item.title} className={styles.pcImage} />}
              </div>
              <div className={styles.link}>{item.title}</div>
              <div className={styles.content}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* ボタン */}
      <div className={styles.buttonContainer}>
        <Link href="/about" className={styles.githubButton}>
          自己紹介を見る
        </Link>
        <Link href="/skills" className={styles.githubButton}>
          スキル一覧を見る
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
