// import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={handleChange} />
    </Label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

export default Filter;
