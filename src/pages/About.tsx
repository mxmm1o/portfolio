import { Header } from "../components/Header";
import styles from "./about.module.css";
import photo from "../assets/IMG_7858.webp"
import { Googlemap } from "../components/Googlemap";


export function About() {
    return (
        <>

            <div className={styles.background}>

                <Header />
                <div className={styles.content}>
                    <div className={styles.photo}>
                        <img src={photo} className={styles.photo} alt="narmy" />
                    </div>
                    <div className={styles.text}>
                        <p> Narumi Ishizu 石津 成海</p>
                        <p>1999年広島生まれ。広島修道大学商学部商学科卒。</p>
                        <p> 映像のディレクションを仕事にしていた。最近は自分で手を動かしてシェーダーの練習をしている。</p>
                        <br></br>
                        <br></br>
                        <p>好きなもの</p>
                        <p>散歩</p>
                        <p>IDM</p>
                        <p>ペットの勲(いさお)</p>
                        <p>横浜DeNAベイスターズ</p>
                        <p>おもちエイリアン</p>
                        <p>多肉植物</p>
                        <br></br>
                        <br></br>
                        <p>email</p>
                        <a className={styles.link} href="mailto:ishizunarumi@gmail.com">ishizunarumi@gmail.com</a>
                        <br></br>
                        <br></br>
                        <a className={styles.link} href="https://www.instagram.com/colonelcadenza/?hl=ja">Instagram</a>
                        <br></br>
                        <a className={styles.link} href="https://x.com/mxmm10__">X</a>
                        <br></br>
                        <br></br>
                        <p>好きなお店</p>
                        <Googlemap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.6850047520816!2d139.6557004757868!3d35.66013167259407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3101ccd1163%3A0xe1ff15fe0e9d3f4d!2sQusamura%20Tokyo!5e0!3m2!1sja!2sjp!4v1773214734793!5m2!1sja!2sjp"

                        />
                        <br></br>
                        <br></br>
                        <iframe
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            height="450"
                            style={{ width: "100%", maxWidth: "500px", overflow: "hidden", borderRadius: "10px" }}
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            src="https://embed.music.apple.com/jp/playlist/pl.u-RRbVY51F3x1723r"
                        />
                    </div>
                </div>
            </div >

        </>
    );
}