import { Grid } from '@mantine/core';
import HeroPhoneBlock from 'components/hero/HeroPhoneBlock';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import gsap from 'gsap/dist/gsap';

const videos = [
  'https://kstatic.googleusercontent.com/files/dfb9f5574f912670aca64ab32d690302f592ddbb81f4333821403b5501321a9acf26f4b050139637fa2890bbdf88e79259e0ae9472e1394d4be47b54667f6e21',
  'https://kstatic.googleusercontent.com/files/a22c40a5fbc5b4f9eb6fa77e232b4106546d67302244e5c03af4ffcd49a86473f1615f0ffdc8204e62576008050be336dfe0cbb70e754c70f06b4c7ecd4dd3ca',
];
const photos = [
  'https://lh3.googleusercontent.com/e6W12HucjyEIRg_nLzpW489zhl65yttWZZlU6IvG5CJe3wURC9tmcBCoHh8TU3-L0MmjGysnXYIG-dgyLsPFPMrzJIq0V3GmeKq03w=s0',
  'https://lh3.googleusercontent.com/WTVf7YDXhBKR_Mr48EPvuEjsU4zvSGsHl2yBp0S2EHv-a3LT6JqMvEdzxIqWOCV0lS0LuskC429JKYGvMWtohM36qpeeHCeWvhfv=s0',
  'https://lh3.googleusercontent.com/8-v56O_QtAGD8rHwrrzb1EFdxv3wauakHDxMfAO6Wd45EdAyOHEaGUw9S1RAOnld7juYQT43lY5bihOnKwiHe-E5UOBVxvNkCsk91w=s0',
  'https://lh3.googleusercontent.com/Qq1Xlfwa7QS9MWZOHe4G8NHPzbre9uJr8wa1FUXafR52FnCTn6v0PqAt9oIhKzoQNC95ZumfqPsbA-56NPKqBfSLn734K7bafSY0zYE=s0',
];

const VideoElement = ({ src }) => {
  return (
    <div>
      <video
        playsInline
        autoPlay
        loop
        src={src}
        muted
        style={{ width: '100%', borderRadius: '20px' }}
      />
    </div>
  );
};

const ImageElement = ({ src }) => {
  return (
    <div>
      <Image
        unoptimized
        src={src}
        alt="image"
        layout="responsive"
        height={305}
        width={170}
        style={{ borderRadius: '20px' }}
      />
    </div>
  );
};

const HeroCollage: FC = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      '.hero-collage-element',
      { y: 300 },
      { y: 0, duration: 1, delay: (i) => 0.2 * i },
    );
  }, []);

  return (
    <Grid grow>
      <Grid.Col span={3}>
        <Grid grow>
          {leftImages.map((img, i) => (
            <Grid.Col key={i} span={4} className="hero-collage-element">
              <ImageElement src={img} />
            </Grid.Col>
          ))}
          <Grid.Col span={4} className="hero-collage-element">
            <VideoElement src={leftVideo} />
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={4} mx={-160} sx={{ position: 'relative' }}>
        <HeroPhoneBlock />
      </Grid.Col>
      <Grid.Col span={3}>
        <Grid grow>
          <Grid.Col span={4} className="hero-collage-element">
            <VideoElement src={rightVideo} />
          </Grid.Col>
          {rightImages.map((img, i) => (
            <Grid.Col key={i} span={4} className="hero-collage-element">
              <ImageElement src={img} />
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>
    </Grid>
  );
};

export default HeroCollage;
