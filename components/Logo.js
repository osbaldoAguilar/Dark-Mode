import styles from '../styles/Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.innerLogo}>
        <span>O</span>
        <span>A</span>
      </div>
    </div>
  );
};

export default Logo;
