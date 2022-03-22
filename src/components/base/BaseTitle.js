import styled from 'styled-components';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const BaseTitle = ({title}) => {
  return <StyledTitle {...useScrollFadeIn()}>{title}</StyledTitle>;
};

const StyledTitle = styled.p`
  font-size: 7.2rem;
  font-family: 'Montserrat-ExtraBold';
  color: var(--title_color) !important;
`;

export default BaseTitle;
