// lib/microcms.ts

// =========================
// 型定義
// =========================
export type Portfolio = {
  id: string;
  title: string;
  slug: string;
  content: string;
  img?: { url: string };
  publishedAt?: string;
  siteUrl?: string;
};

// =========================
// 一覧取得関数
// =========================
export const fetchPortfolio = async (): Promise<{ contents: Portfolio[] }> => {
  const res = await fetch(`https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/portfolio`, {
    headers: { "X-API-KEY": process.env.MICROCMS_API_KEY as string },
    cache: "no-store", // SSGにしたい場合は 'force-cache'
  });

  if (!res.ok) {
    throw new Error("データの取得に失敗しました");
  }

  const data = await res.json();

  if (!data.contents) {
    throw new Error("取得したデータが空です");
  }

  return data;
};

// =========================
// 詳細取得関数
// =========================
export const fetchPortfolioDetail = async (slug: string): Promise<Portfolio> => {
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/api/v1/portfolio?filters=slug[equals]${slug}`,
    {
      headers: { "X-API-KEY": process.env.MICROCMS_API_KEY as string },
      cache: "no-store", // SSGにしたい場合は 'force-cache'
    }
  );

  if (!res.ok) {
    throw new Error("データの取得に失敗しました");
  }

  const data = await res.json();

  if (!data.contents || data.contents.length === 0) {
    throw new Error("データが見つかりませんでした");
  }

  return data.contents[0]; // 詳細ページは1件だけ返す
};
