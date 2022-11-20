interface PriceItemProps {
  id: number;
  value: string;
}

export interface PriceProps {
  id: number;
  title: string;
  price: string;
  description: string;
  items: PriceItemProps[];
  buttonText: string;
  ariaLabel: string;
  href: string;
}
