import { fetchPortfolioDetail, Portfolio } from "../../../lib/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../components/PortfolioDetail.module.css";
import { ExternalLink } from "lucide-react";

// 動的メタデータ生成（これが正解）
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = await fetchPortfolioDetail(params.slug);

  return {
    title: `${item.title} | KA-I Portfolio`,
    description: `${item.title}の詳細ページです。`,
    openGraph: {
      type: "article",
      url: `https://your-site-url.com/portfolio/${params.slug}`, // デプロイ後のURLに変更
      title: `${item.title} | KA-I Portfolio`,
      description: `${item.title}の詳細ページです。`,
      images: [
        {
          url: item.img?.url || "/ogp-default.png", // OGP画像がなければデフォルト画像
          width: 1200,
          height: 630,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

type Props = {
  params: { slug: string };
};

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = params;

  let item: Portfolio;

  try {
    item = await fetchPortfolioDetail(slug);
  } catch (error) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{item.title}</h1>
      {item.img && <img src={item.img.url} alt={item.title} className={styles.image} />}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: item.content }} />

      {/* サイトリンク */}
      {item.siteUrl && (
        <div className={styles.linkContainer}>
          <a href={item.siteUrl} target="_blank" rel="noopener noreferrer" className={styles.siteLink}>
            サイトを見る
            <ExternalLink size={18} style={{ marginLeft: "8px" }} />
          </a>
        </div>
      )}

      {/* 戻るボタン */}
      <div className={styles.backButtonContainer}>
        <Link href="/portfolio" className={styles.fixedBackButton}>
          実績一覧に戻る
        </Link>
      </div>
    </main>
  );
}
