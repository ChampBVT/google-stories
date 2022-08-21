import PhoneFrame from '@assets/hero-phone-frame.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap/dist/gsap';
import HeroCaption from 'components/hero/HeroCaption';

const video =
  'https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0';

const HeroPhoneBlock = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const intro = () => {
      const tl = gsap.timeline();

      tl.fromTo(ref.current, { y: -100 }, { y: -300, duration: 1 });
    };

    const stopTrigger = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: () => '+=1000',
          pin: true,
          scrub: true,
        },
      });

      tl.to(ref.current, { scale: 0.8 }, '+=0.3');
      tl.to('#__next', { backgroundColor: 'black', duration: 0.5 }, '-=0.6');
    };

    const tl = gsap.timeline();
    tl.add(intro).add(stopTrigger, '>+=1');
  }, []);

  return (
    <>
      <div
        style={{
          position: 'relative',
          height: '100%',
          maxWidth: 560,
          width: '65%',
        }}
        ref={ref}
      >
        <div
          style={{
            position: 'absolute',
            top: '40%',
            width: '100%',
            transform: 'translateX(35%)',
          }}
        >
          <Image src={PhoneFrame} alt="PhoneFrame" layout="responsive" />
          <video
            playsInline
            autoPlay
            muted
            src={video}
            loop
            style={{
              width: '60%',
              transform: 'scale(1.07)',
              top: '8%',
              left: '11%',
              borderRadius: '20px',
              position: 'absolute',
            }}
          />
        </div>
      </div>
      <HeroCaption />
    </>
  );
};

export default HeroPhoneBlock;
