import PropTypes from 'prop-types';

import styles from './feedbackoptions.module.scss';

const FeedbackOptions = () => {

    return (
        <ul>
            <li>
                <button>Good</button>
            </li>
            <li>
                <button>Neutral</button>
            </li>
            <li>
                <button>Bad</button>
            </li>
        </ul>
    )
};

export default FeedbackOptions;