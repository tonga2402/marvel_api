import { IoLogoGithub , IoLogoLinkedin } from "react-icons/io";
import styles from '../styles/footer.module.css'
import { motion } from "framer-motion"

function Footer() {
  return (
    <div className={styles.containDiv}>

    <motion.div 
       initial={{ y: 9, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       transition={{ duration: "1" }}
       className={styles.footerDiv}>
        <ul className={styles.footerUl}>
            <li className={styles.footerLi}><a href="https://github.com/tonga2402" target="_blank" className={styles.footerA}><IoLogoGithub /></a></li>
            <li className={styles.footerLi}><a href="https://www.linkedin.com/in/gaston-balmaceda/" target="_blank" className={styles.footerA}><IoLogoLinkedin /></a></li>
        </ul>
        <h3 className={styles.footerH3}>Created by <span>Gaston Balmaceda</span></h3>
      
    </motion.div>
          </div>
  )
}

export default Footer
