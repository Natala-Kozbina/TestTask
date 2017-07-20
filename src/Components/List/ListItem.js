import Styled from 'styled-components';
import { ListItem } from 'material-ui/List';

export default Styled(ListItem)`
  border: 1px solid goldenrod !important;
  padding: 0 20px !important;
  background: ${props => (props.color)} 
`;

