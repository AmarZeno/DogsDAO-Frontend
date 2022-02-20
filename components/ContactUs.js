import ContactProfile from './ContactProfile';
import styled from 'styled-components';
import victor from '../assets/victor.png';
import zeno from '../assets/zeno.png';

const LandingBlockTitle = styled.h3`
  margin-top: 10vh;
  font-size: 2.5em;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const ContactsBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;

  @media (max-width: 768px) {
    padding-top: 30vh;
  }
`;

const ContactUs = (props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '10vh',
    }}
  >
    <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h1>
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <ContactProfile src={zeno} name='Zeno Saviour' email='aaa@gmail.com' />
      <ContactProfile src={victor} name='Victor Chee' email='kweic8@gmail.com' />
    </div>
  </div>
);

export default ContactUs;
