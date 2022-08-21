import Hero from 'components/hero';
import type { NextPage } from 'next';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import { useEffect } from 'react';
import Slides from 'components/slides';
import { Container, Stack } from '@mantine/core';

const Home: NextPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return (
    <Container style={{ position: 'relative' }} size={1920} px={0}>
      <Stack>
        <Hero />
        <Slides />
      </Stack>
    </Container>
  );
};

export default Home;
