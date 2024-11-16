import styles from "./index.module.css";
import icon from "../../assets/icon.png"

const Logo = () => {
  return <div className={styles.logo}>
    <img className={styles.logoImg} src={icon} alt="" />
  </div>;
};
export default Logo;
