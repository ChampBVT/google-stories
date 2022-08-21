import { Title, Center, Stack, Text } from '@mantine/core';
import { useIsInViewport } from 'components/hooks/useIsInViewPort';
import Slide from 'components/slides/slide';
import gsap from 'gsap/dist/gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { createRef, Dispatch, FC, useEffect, useState } from 'react';

const contents = [
  {
    title: 'COMPLETE CONTROL',
    description:
      'Every decision, from how you monetize your story to how long it stays online, is up to you.',
    image:
      'https://images.unsplash.com/photo-1615617396130-db493d04e2c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100',
  },
  {
    title: 'ON BRAND',
    description:
      'With the ability to command every pixel, each story can be designed to fit your brand.',
    image:
      'https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100',
  },
  {
    title: 'IMMERSIVE',
    description:
      'Web Stories allow you to feature full screen video, photos, and audio, seamlessly.',
    image:
      'https://images.unsplash.com/photo-1561532089-cb18d10f86b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=100',
  },
];

const FeatureText: FC<{
  setCurrent: Dispatch<number>;
  index: number;
  title: string;
  description: string;
}> = ({ setCurrent, index, title, description }) => {
  const { ref, isVisible } = useIsInViewport({ threshold: 0.5 });

  useEffect(() => {
    if (isVisible) setCurrent(index);
  }, [index, isVisible, setCurrent]);

  return (
    <Center sx={{ height: '100vh' }} ref={ref}>
      <Stack px={200}>
        <Title order={1} weight={900} italic size={80} color={'dark'}>
          {title}
        </Title>
        <Text size={24} weight={700}>
          {description}
        </Text>
      </Stack>
    </Center>
  );
};

const Slides: FC = () => {
  const [current, setCurrent] = useState(0);
  const textRef = createRef<HTMLDivElement>();
  const slideRef = createRef<HTMLDivElement>();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stopTrigger = () => {
      if (!slideRef.current || !textRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slideRef.current,
          start: 'top top',
          // Fix spacing issue at the bottom
          end: () => `bottom 99%`,
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });
    };

    const master = gsap.timeline();
    // Delay in order to wait others scrollTrigger
    master.add(stopTrigger, 1);

    window.addEventListener('resize', () => ScrollTrigger.refresh());
  }, [slideRef, textRef]);

  return (
    <div
      style={{
        display: 'grid',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <Stack ref={textRef} sx={{ height: 'fit-content' }}>
        {contents.map((c, idx) => (
          <FeatureText
            setCurrent={setCurrent}
            index={idx}
            key={idx}
            title={c.title}
            description={c.description}
          />
        ))}
      </Stack>
      <div ref={slideRef} style={{ position: 'relative', overflow: 'hidden' }}>
        {contents.map(({ image }, idx) => (
          <Slide src={image} current={current} key={idx} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Slides;
