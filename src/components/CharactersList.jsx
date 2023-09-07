import { Link } from "react-router-dom";
import styles from '../styles/charactersList.module.css'
import { motion } from 'framer-motion'


const CharactersList = ({ characters }) => {
  return (
    <div className={styles.characterDiv}>
      {characters.map((character) => (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: "0.2" }}
          key={character.id}
          className={styles.cardDiv}
        >
          <h3 className={styles.cardH3}>{character.name}</h3>
          <img
            className={styles.img}
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt={character.title}
          />
          <Link to={`/character/${character.id}`} className={styles.cardLink}>
            Characters
          </Link>
        </motion.div>
      ))}
    </div>
  );
}


        

export default CharactersList
