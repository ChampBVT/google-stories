import { Center, Group, Text } from '@mantine/core';
import { FC } from 'react';

const HeroCaption: FC = () => {
  return (
    <Group
      position="apart"
      sx={{
        position: 'absolute',
        top: '75%',
        gap: '400px',
        left: '-5vw',
        right: '-5vw',
        flexWrap: 'nowrap',
      }}
    >
      <Text color={'white'} size={24} sx={{ width: '100%' }} weight={600}>
        The tappable story format has never been more accessible—to creators and
        readers alike web.
      </Text>
      <Text color={'white'} size={'lg'} sx={{ width: '100%' }} weight={600}>
        See what happens when Google brings stories to the open.
      </Text>
    </Group>
  );
};

export default HeroCaption;
