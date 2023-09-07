import { Link } from "react-router-dom"
import styles from '../styles/navbar.module.css'
import Logo from '../img/Marvel_logo.svg'
import Back from '../img/spiderman.jpg'
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <>
      <motion.div 
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: "1" }}
          className={styles.navbarDiv}>

        <img src={Logo} alt="Logo" className={styles.navbarImg} />
        <ul className={styles.navbarUl}>
          <li className={styles.navbarLi1}>
            <Link to="/" className={styles.navbarLink}>
              HOME
            </Link>
          </li>
          <li className={styles.navbarLi2}>
            <Link to="character" className={styles.navbarLink}>
              CHARACTERS
            </Link>
          </li>
        </ul>
      </motion.div>
    
      <motion.img src={Back} alt="" 
        initial={{ x: 0, opacity: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: "0.4" }}
        className={styles.backImg} />

    </>
  );
}

export default Navbar
