import { Center, MediaQuery, Title } from '@mantine/core';
import { gsap } from 'gsap/dist/gsap';
import { createRef, useEffect } from 'react';

const HeroHeader = () => {
  const ref = createRef<HTMLHeadingElement>();

  useEffect(() => {
    if (ref.current)
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.8 },
      );
  }, [ref]);

  return (
    <Center pt={300} pb={250} px={'md'}>
      <MediaQuery smallerThan="md" styles={{ fontSize: '30px', width: '100%' }}>
        <Title
          order={1}
          align="center"
          sx={{ fontSize: '70px', width: '50%' }}
          ref={ref}
        >
          Stories meet their widest audience ever
        </Title>
      </MediaQuery>
    </Center>
  );
};

export default HeroHeader;
