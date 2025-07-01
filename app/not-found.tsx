// app/not-found.tsx
import Link from "next/link";
import styles from "./components/NotFound.module.css";

export default function NotFoundPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404 - ページが見つかりません</h1>
      <p className={styles.description}>お探しのページは存在しないか、移動した可能性があります。</p>
      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.button}>
          トップページに戻る
        </Link>
      </div>
    </main>
  );
}
