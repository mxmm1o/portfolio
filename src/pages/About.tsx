import { Header } from "../components/Header";
import styles from "./about.module.css";
import photo from "../assets/IMG_7858.webp"

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
                        <p> </p>
                        <p> </p>
                        <p>好きなもの</p>
                        <p>散歩</p>
                        <p>ペットの勲(いさお)</p>
                        <p>横浜DeNAベイスターズ</p>
                        <p>純喫茶のクリームソーダ</p>
                        <p>フィルムカメラで街を撮ること</p>
                        <p>薄暗い夜明け</p>
                        <p>自堕落な生活</p>
                        <p> </p>
                        <p> </p>
                        <p>email</p>
                        <p>ishizunarumi@gmail.com</p>
                        <p> </p>
                        <p> </p>
                        <p>instagram</p>

                        <p>AppleMusicはる</p>


                    </div>
                </div>
            </div >

        </>
    );
}