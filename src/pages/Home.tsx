import { Header } from '../components/Header'
import styles from "./Home.module.css";
import { works } from "../data/works"
import { Workcard } from "../components/Workcard"



export function Home() {
  return (
    <>
      <Header />
      <div className={styles.grid}>
        {works.map((work) => (
          <Workcard key={work.id}
            id={work.id}
            title={work.title}
            image={work.image}
            description={work.description} />

        ))}


      </div>

    </>
  );
}