import PropTypes from 'prop-types';

import styles from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
        <ul className={styles.container}>
            <li className={styles.list}>
                <p className={styles.item}>Good: {good}</p>
            </li>
            <li className={styles.list}>
                <p className={styles.item}>Neutral: {neutral}</p>
            </li>
            <li className={styles.list}>
                <p className={styles.item}>Bad: {bad}</p>
            </li>
            <li className={styles.list}>
                <p className={styles.item}>Total: {total}</p>
            </li>
            <li className={styles.list}>
                <p className={styles.item}>Positive feedback: {positivePercentage}%</p>
            </li>
        </ul>
    )
};

export default Statistics;