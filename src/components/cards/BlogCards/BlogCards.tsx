import { Box, Container, Stack } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../../core/Card';
import { Header } from '../../core/Header';
import { CardProps } from '../../core/Card/Card.types';

const BlogCards = () => {
  const cards: CardProps[] = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      imgAlt: 'An RGB keyboard',
      title: 'Lorem Ipsum',
      details: 'Placeat, Animi',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1294&q=80',
      imgAlt: 'Wireframing',
      title: 'Cupla a Incidunt',
      details: 'Fugit, Repellat',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      imgAlt: 'Typing at a computer',
      title: 'Dolor Sit Amet',
      details: 'Itaque, Earum',
    },
  ];

  return (
    <Container maxW='8xl' px={{ base: 5, md: 10 }}>
      <Header
        subtitle='Unde minima'
        title='A delectus excepturi cumque aliquam voluptatibus sit quia'
      />
      <Stack direction={{ base: 'column', lg: 'row' }} spacing={28}>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Stack>
    </Container>
  );
};

export default BlogCards;
