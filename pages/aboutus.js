import { Flex } from '@magiclabs/ui';
import styles from '../styles/aboutus.module.css';

const Block = (props) => {
  return <div style={props.style}>{props.children}</div>;
};

const AboutUs = (props) => {
  return (
    <div>
      <Block
        style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      ></Block>
      <Block
        style={{
          height: '80vh',
          backgroundColor: 'skyblue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Block>
      <Block
        style={{ height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      ></Block>
      <Block
        style={{
          height: '80vh',
          backgroundColor: 'pink',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Block>
    </div>
  );
};

export default AboutUs;
