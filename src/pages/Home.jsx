import Logo from '../img/Marvel_logo.svg'
import styles from '../styles/home.module.css'
import { motion } from "framer-motion"

const Home = () => {
  return (
    <div className={styles.homeDiv}>
      <motion.img 
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: "2" }}
      className={styles.homeImg} src={Logo} alt="marvel" />
    </div>
  )
}
export default Home