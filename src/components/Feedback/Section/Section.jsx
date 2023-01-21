import styles from './section.module.scss';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};
export default Section;
