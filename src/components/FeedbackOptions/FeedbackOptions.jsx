import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <ListItem key={option}>
        <Button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      </ListItem>
    ))}
  </List>
);

export default FeedbackOptions;

FeedbackOptions.propTyres = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
