import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { selectFilter } from 'redux/selectors';
import { FilterWrapper, FilterText, FilterInput } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <FilterWrapper>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput
        name="filter"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
      />
    </FilterWrapper>
  );
};

export default Filter;
