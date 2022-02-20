import Image from 'next/image';
import styled from 'styled-components';

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
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}
    className={props.className}
  >
    <div style={{ borderRadius: '150px', overflow: 'hidden' }}>
      <Image width={150} height={150} borderRadius={150} alt={props.name} src={props.src} />
    </div>
    {props.name && <StyledName>{props.name}</StyledName>}
    {props.email && <StyledLink href={`mailto: ${props.email}`}>{props.email}</StyledLink>}
  </div>
);

export default ContactProfile;
