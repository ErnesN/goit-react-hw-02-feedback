import Button from './Button';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button
        onClick={() => onLeaveFeedback('good')}
        type="button"
        children="Good"
      />
      <Button
        onClick={() => onLeaveFeedback('neutral')}
        type="button"
        children="Neutral"
      />

      <Button
        onClick={() => onLeaveFeedback('bad')}
        type="button"
        children="Bad"
      />
    </>
  );
};

export default FeedbackOptions;
