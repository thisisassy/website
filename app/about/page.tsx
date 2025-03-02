import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.about__content}>
      <div className={styles.career}>
        <h2>略歴</h2>
        <div className={styles.profile}>
          <h3>芦内 晴香（アシウチ ハルカ）</h3>
          <p>
            1994年生まれ、兵庫県出身。大学ではWebデザインを学び、その後ウェブ制作会社に勤務。独学でフランス語と翻訳を学び、フリーランスとして独立。現在は、IT・経済金融分野を中心に英語・フランス語を日本語への翻訳を主としている。
          </p>
          <p>
            <strong>資格：</strong>
            実用英語技能検定2級，フランス語検定準2級，TOEIC L&R 720点
          </p>
        </div>
      </div>
      <div className={styles.services}>
        <h2>できること</h2>
        <div className={styles.service__list}>
          <div className={styles.list__item}>
            <h3>翻訳</h3>
            <p>
              IT・経済分野を中心とした実務翻訳をメインに翻訳活動を行っています。
            </p>
          </div>
          <div className={styles.list__item}>
            <h3>通訳ガイド</h3>
            <p>兵庫・大阪を中心とした関西地方を英語でガイドしています。</p>
          </div>
          <div className={styles.list__item}>
            <h3>英語教育</h3>
            <p>
              これまでの自身の英語学習で培った知恵と大学院で学んだ英語教育学を活かして主に小学生〜中学生に英語を教えています。
            </p>
          </div>
          <div className={styles.list__item}>
            <h3>文章執筆</h3>
            <p>
              専門的なライティングの教育は受けていませんが、Web媒体での執筆経験があります。また長年ブログを書いています。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
