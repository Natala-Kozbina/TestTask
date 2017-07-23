import Styled from 'styled-components';

export default Styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  outline: 1px solid;
  height: 220px;
  color: darkblue;
  background-color: ${props => (props.isSelected ? 'rgb(61, 103, 230)' : 'initial')};
  width: 180px;
  margin: 3px;
  font-size: 12px;
  div {
    span:first-child {
      font-weight: 700;
      color: black;
    }
  }
  
  &:hover {
    background-color: ${props => (props.isSelected ? 'rgb(61, 103, 230)' : 'skyblue')};;
  }
`;

