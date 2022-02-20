import ContactProfile from '../components/ContactProfile';
import styled from 'styled-components';

const LandingBlockTitle = styled.h3`
  margin-top: 10vh;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const ContactsBlock = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;

  @media (max-width: 768px) {
    padding-top: 30vh;
  }
`;

const ContactsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

const LandingContact = styled(ContactProfile)`
  margin: 0em 5em;
  padding-top: 2em;
  padding-bottom: 2em;

  @media (max-width: 768px) {
    margin-left: 0em;
  }
`;
const ContactUs = (props) => (
  <ContactsBlock>
    {/* <LandingBlockTitle>Contact Information</LandingBlockTitle> */}
    <ContactsContainer>
      <LandingContact src={'./zeno.png'} name='Zeno Saviour' email='aaa@gmail.com' />
      <LandingContact src={'./victor.jpg'} name='Victor Chee' email='kweic8@gmail.com' />
    </ContactsContainer>
  </ContactsBlock>
);

export default ContactUs;
