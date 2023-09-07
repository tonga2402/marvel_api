import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getComics } from "../services/getComics";
import styles from "../styles/comics.module.css"
import { motion } from 'framer-motion'

const Comics = () => {

  const { characterId } = useParams();
  const [ comics , setComics] = useState([]);

  useEffect(()=>{
      (async () =>{
        const comicsData = await getComics({characterId});
        setComics(comicsData);
      })();
 },[])
  return (
    <div className={styles.comicDiv}>
      {comics.map((comic) => (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: "0.2" }}
          className={styles.cardComicDiv}
          key={comic.id}
        >
          <h2>{comic.title}</h2>
          <p className={styles.cardP}>{comic.description}</p>
          <img
            className={styles.cardComicImg}
            src={comic.thumbnail.path + "." + comic.thumbnail.extension}
            alt={comic.title}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default Comics
