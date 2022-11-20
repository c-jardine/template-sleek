import { PriceProps } from '../../src/components/cards/PriceCard';

const Prices: PriceProps[] = [
  {
    id: 0,
    title: 'Ipsum',
    price: 'Starting at $500',
    description:
      'Est adipisicing aliquip minim esse tempor velit amet id dolore mollit esse.',
    items: [
      {
        id: 0,
        value:
          'Culpa velit laboris ad labore aute eu tempor anim aliquip dolor',
      },
      {
        id: 1,
        value:
          'Minim nisi aliqua laborum magna commodo consequat enim dolor nostrud',
      },
      {
        id: 2,
        value:
          'Ipsum officia ut minim excepteur in eu officia minim exercitation',
      },
      { id: 3, value: 'Anim qui irure dolore nostrud' },
    ],
    buttonText: 'Get started',
    ariaLabel: 'Get started with Ipsum plan',
    href: '/services',
  },
  {
    id: 1,
    title: 'Lorem',
    price: '$150/mo',
    description:
      'Elit sit veniam deserunt ullamco nisi excepteur culpa magna ipsum Lorem magna dolore eiusmod.',
    items: [
      {
        id: 0,
        value: 'Velit aliquip dolor consectetur ex labore do labore magna',
      },
      { id: 1, value: 'Commodo quis sit officia sit aute sunt' },
      { id: 2, value: 'Dolore commodo consectetur consequat elit dolor id' },
      { id: 3, value: 'Magna adipisicing nostrud culpa eu aliquip' },
      {
        id: 4,
        value: 'Adipisicing irure voluptate pariatur consequat pariatur',
      },
      {
        id: 5,
        value: 'Sit mollit reprehenderit qui ex sit in ullamco dolore irure',
      },
      {
        id: 6,
        value: 'Minim Lorem aliquip enim',
      },
    ],
    buttonText: 'Get started',
    ariaLabel: 'Get started with Lorem plan',
    href: '/services',
  },
  {
    id: 2,
    title: 'Dolor',
    price: 'Contact for price',
    description: 'Commodo amet nostrud ut ipsum quis enim duis incididunt.',
    items: [
      {
        id: 0,
        value: 'Eu cupidatat eiusmod commodo eu officia minim proident',
      },
      { id: 1, value: 'Proident ut deserunt anim elit' },
      {
        id: 2,
        value: 'Nulla dolore velit commodo non ut',
      },
      {
        id: 3,
        value: 'Ut pariatur laboris ut tempor dolore amet proident amet',
      },
      {
        id: 4,
        value: 'Proident non et tempor irure laborum sunt',
      },
      {
        id: 5,
        value: 'Cupidatat aute ut sint do veniam aliquip dolore',
      },
      {
        id: 6,
        value: 'Qui minim reprehenderit amet et ex consequat ipsum ea',
      },
    ],
    buttonText: 'Contact now',
    ariaLabel: 'Go to contact page',
    href: '/contact',
  },
];

export default Prices;
