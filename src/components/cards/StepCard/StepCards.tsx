import { Container, Stack } from '@chakra-ui/react';
import { StepCard } from '.';
import { Header } from '../../core/Header';
import { StepCardProps } from './StepCard.types';

const StepCards = () => {
  const cards: StepCardProps[] = [
    {
      step: 1,
      title: 'Lorem Ipsum',
      details:
        'Anim est esse nisi dolor anim laborum laboris ea nulla eu. Duis cupidatat et eu est ut duis nulla velit sunt ea ea aliqua irure consectetur. Sint proident mollit eu aute in sunt ex qui do nisi eu tempor.',
      flip: false,
    },
    {
      step: 2,
      title: 'Cupla a Incidunt',
      details:
        'Esse qui incididunt ad excepteur Lorem ipsum excepteur ut id est Lorem eiusmod. Ut pariatur amet nostrud irure amet Lorem nisi eu tempor laborum enim quis. Veniam incididunt tempor esse dolore amet.',
      flip: true,
    },
    {
      step: 3,
      title: 'Dolor Sit Amet',
      details:
        ' Adipisicing irure magna adipisicing fugiat veniam ullamco ex magna id. Anim cillum proident nostrud cupidatat in Lorem cillum ut eiusmod. Consectetur exercitation ullamco veniam ex pariatur sit ipsum.',
      flip: false,
    },
  ];

  return (
    <Container maxW='6xl' px={{ base: 5, md: 10 }}>
      <Header
        center
        subtitle='Unde minima'
        title='A delectus excepturi cumque aliquam voluptatibus sit quia'
        description='Mollit consequat nostrud ipsum ad excepteur non pariatur anim nostrud. Cupidatat officia cillum laborum cupidatat magna. Dolore voluptate fugiat duis ut ad. Cupidatat quis excepteur anim officia commodo. Sit cupidatat mollit pariatur Lorem ipsum quis eu magna occaecat occaecat sint proident veniam. Commodo voluptate nostrud labore elit id reprehenderit nostrud.'
      />
      <Stack mt={{ base: 16, md: 32 }} spacing={{ base: 16, md: 28 }}>
        {cards.map((card, index) => (
          <StepCard key={index} {...card} />
        ))}
      </Stack>
    </Container>
  );
};

export default StepCards;
