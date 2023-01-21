import styles from './statistic.module.scss';
const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <>
      <p className={styles.text}>Good:{good}</p>
      <p className={styles.text}>Neutral:{neutral}</p>
      <p className={styles.text}>Bad:{bad}</p>

      <p className={styles.text}>Total:{total}</p>
      <p className={styles.text}>Positive feedback:{positiveFeedback}</p>
    </>
  );
};

export default Statistic;
