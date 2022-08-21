import { FC } from 'react';
import cn from 'classnames';

const Slide: FC<{ src: string; current: number; index?: number }> = ({
  src,
  current,
  index,
}) => {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        height: '100vh',
        right: 0,
        position: 'absolute',
        backgroundImage: `url(${src})`,
        backgroundPosition: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className={cn('animate', {
        'opacity-1': current === index,
        'opacity-0': current !== index,
      })}
    />
  );
};

export default Slide;
