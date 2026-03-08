import { Header } from '../components/Header'
import styles from "./Home.module.css";
import work1 from "../assets/loveflutter.webp"
import work2 from "../assets/nulbarich.webp"
import work3 from "../assets/thonght.webp"
import work4 from "../assets/kizunaai.webp"
import work5 from "../assets/golddisc.webp"
import work6 from "../assets/univa.webp"


const works = [
  { id: 1, title: "パソコン音楽クラブ 『Love Flutter』 Release Party at Spotify O-east", image: work1 },
  { id: 2, title: "Nulbarich SUMMER SONIC 2024 / SWEET LOVE SHOWER 2024", image: work2 },
  { id: 3, title: "thonght nowhere Music Video", image: work3 },
  { id: 4, title: "KizunaAI「まざる」Official Visualizer", image: work4 },
  { id: 5, title: "GOLD DISC at ZERO TOKYO", image: work5 },
  { id: 6, title: "UNIVERSAL STUDIO JAPAN ハロウィーンCM 「正気なんか、失え。」篇", image: work6 },
]


export function Home() {
  return (
    <>
      <Header />
      <div className={styles.grid}>
        {works.map((work) => (
          <div key={work.id} className={styles.card}>
            <img src={work.image} />
            <div className="overlay"> <p>{work.title}</p></div>
          </div>
        ))}
      </div>
    </>
  );
}