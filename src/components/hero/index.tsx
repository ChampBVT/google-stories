import { Container } from '@mantine/core';
import HeroCollage from 'components/hero/HeroCollage';
import HeroFooter from 'components/hero/HeroFooter';
import HeroHeader from 'components/hero/HeroHeader';
import { FC } from 'react';

const Hero: FC = () => {
  return (
    <Container style={{ position: 'relative' }} size={1920}>
      <HeroHeader />
      <HeroCollage />
      <HeroFooter />
    </Container>
  );
};

export default Hero;
