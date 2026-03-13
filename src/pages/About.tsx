import { Header } from "../components/Header";
import styles from "./about.module.css";
import photo from "../assets/IMG_7858.webp"
import { Googlemap } from "../components/Googlemap";
import { timelineData } from "../data/timelinecard";
import { TimelineCard } from "../components/TimelineCard";

export function About() {
    return (
        <>
            <div className={styles.background}>
                <Header />
                <div className={styles.pageCols}>

                    <div className={styles.colLeft}>
                        <img src={photo} className={styles.photo} alt="narmy" />

                        <div className={styles.nameBlock}>
                            <p>Narumi Ishizu</p>
                            <p>石津 成海</p>
                        </div>

                        <div className={styles.bio}>
                            <p>1999年広島生まれ。広島修道大学商学部商学科卒。</p>
                            <p>映像のディレクションを仕事にしていた。最近は自分で手を動かしてシェーダーの練習をしている。</p>
                            <br />
                            <div className={styles.infoBlock}>
                                <p className={styles.sectionLabel}>LIKES</p>
                                <p>散歩</p>
                                <p>IDM</p>
                                <p>ペットの勲(いさお)</p>
                                <p>横浜DeNAベイスターズ</p>
                                <p>おもちエイリアン</p>
                                <p>多肉植物</p>

                                <div className={styles.divider} />

                                <p className={styles.sectionLabel}>CONTACT</p>
                                <div className={styles.contactRow}>
                                    <p className={styles.contactLabel}>email</p>
                                    <a className={styles.link} href="mailto:ishizunarumi@gmail.com">ishizunarumi@gmail.com</a>
                                </div>
                                <div className={styles.contactRow}>
                                    <p className={styles.contactLabel}>Instagram</p>
                                    <a className={styles.link} href="https://www.instagram.com/colonelcadenza/?hl=ja">@colonelcadenza</a>
                                </div>
                                <div className={styles.contactRow}>
                                    <p className={styles.contactLabel}>X</p>
                                    <a className={styles.link} href="https://x.com/mxmm10__">@mxmm10__</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.colRight}>
                        <div className={styles.bio}> <p>人生年表</p> </div>
                        <br />
                        <div className={styles.cards}>
                            {timelineData.map((item) => (
                                <TimelineCard key={item.date}
                                    date={item.date}
                                    age={item.age}
                                    title={item.title}
                                    body={item.body}
                                />
                            ))}
                        </div>
                        <br />
                        <br />
                        <div className={styles.bio}> <p>おきにいりのお店</p> </div>
                        <br />
                        <div className={styles.mapCard}>
                            <div className={styles.shopInfo}>
                                <p>Qusamura Tokyo</p>
                                <div className={styles.address}>
                                    <p>〒155-0033</p>
                                    <p> 東京都世田谷区代田4丁目3-12</p></div>
                            </div>
                            <Googlemap
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6850047520816!2d139.6557004757868!3d35.66013167259407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3101ccd1163%3A0xe1ff15fe0e9d3f4d!2sQusamura%20Tokyo!5e0!3m2!1sja!2sjp!4v1773214734793!5m2!1sja!2sjp"
                            />
                        </div>
                        <br />
                        <div className={styles.bio}> <p>おきにいりの動画</p> </div>
                        <br />
                        <div className={styles.mapCard}>
                            <div className={styles.shopInfo}>
                                <p>現実チャンネル</p>
                                <div className={styles.address}>
                                    <p>現実 実況プレイ 特別編</p>
                                    <p>～何者にもなれなかった自分攻略〜</p></div>
                            </div>
                            <div className={styles.videoWrap}>
                                <iframe
                                    width="100%"
                                    src="https://www.youtube.com/embed/BGgxcNrdqm0?si=_GShwcQH1dXJX5-H"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );
}