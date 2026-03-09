import { Header } from '../components/Header'
import styles from "./Home.module.css";
import { Link } from "react-router"
import { works } from "../data/works"




export function Home() {
  return (
    <>
      <Header />
      <div className={styles.grid}>
        {works.map((work) => (
          <Link key={work.id} to={`/works/${work.id}`} className={styles.link}>
            <div className={styles.card}>
              <img src={work.image} className={styles.img} />
              <div className={styles.overlay}>
                <p>{work.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}