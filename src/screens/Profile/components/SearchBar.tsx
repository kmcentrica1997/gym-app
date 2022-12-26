import React, {View} from 'react-native';
import styled from 'styled-components';

const SearchBar = () => {
  return <StyledSearchBar></StyledSearchBar>;
};

const StyledSearchBar = styled(View)`
  width: 350px;
  height: 48px;

  background: #ffffff;
  border-radius: 12px;
`;

export default SearchBar;
