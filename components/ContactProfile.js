import { Avatar } from '@mui/material';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
`;

const StyledName = styled.p`
  font-weight: bold;
  margin-top: 1rem;
  max-width: 35vw;
  font-size: 1em;
  text-align: center;
`;

const StyledLink = styled.a`
  margin-top: 0.25rem;
  font-size: 1em;
`;

const ContactProfile = (props) => (
  <StyledContainer className={props.className} style={props.style}>
    <StyledAvatar alt={props.name} src={props.src} />
    {props.name && <StyledName>{props.name}</StyledName>}
    {props.email && <StyledLink href={`mailto: ${props.email}`}>{props.email}</StyledLink>}
  </StyledContainer>
);

export default ContactProfile;
