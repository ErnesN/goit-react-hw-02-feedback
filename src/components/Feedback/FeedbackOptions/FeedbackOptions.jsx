import Button from './Button';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button onClick={() => onLeaveFeedback('good')} type="button" />
      Good
      <Button />
      <Button onClick={() => onLeaveFeedback('neutral')} type="button" />
      Neutral
      <Button />
      <Button onClick={() => onLeaveFeedback('bad')} type="button" />
      Bad
      <Button />
    </>
  );
};

export default FeedbackOptions;
