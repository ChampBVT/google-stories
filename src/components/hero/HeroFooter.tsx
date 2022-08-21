import { Center, Title } from '@mantine/core';
import { createRef, FC, useEffect } from 'react';
import gsap from 'gsap/dist/gsap';

const HeroFooter: FC = () => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const changeBgColor = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: ref.current?.getBoundingClientRect().y,
          end:
            Number(ref.current?.getBoundingClientRect().y) +
            Number(ref.current?.getBoundingClientRect().height),
          scrub: true,
        },
      });

      tl.to('#__next', { backgroundColor: 'white', duration: 0.5 });
    };

    const tl = gsap.timeline();
    tl.scrollTrigger?.refresh();
    tl.add(changeBgColor, '>');
  }, [ref]);

  return (
    <Center pt={500} pb={300}>
      <Title
        order={2}
        align="center"
        sx={{ fontSize: '60px', width: '50%' }}
        ref={ref}
      >
        Visual stories that feel like yours, because they are.
      </Title>
    </Center>
  );
};

export default HeroFooter;
