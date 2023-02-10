import { Component } from 'react';
import PropTypes from 'prop-types';
import { FilterWrapper, FilterText, FilterInput } from './Filter.styled';

class Filter extends Component {
  render() {
    return (
      <FilterWrapper>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput name="filter" onChange={evt => this.props.onInput(evt)} />
      </FilterWrapper>
    );
  }
}

Filter.propTypes = {
  onInput: PropTypes.func.isRequired,
};

export default Filter;
