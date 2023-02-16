import { FilterWrapper, FilterText, FilterInput } from './Filter.styled';

const Filter = ({ value, onFilterInput }) => {
  return (
    <FilterWrapper>
      <FilterText>Find contacts by name</FilterText>
      <FilterInput name="filter" value={value} onChange={onFilterInput} />
    </FilterWrapper>
  );
};

export default Filter;
