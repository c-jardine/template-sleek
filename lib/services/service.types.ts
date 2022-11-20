export interface ServiceProps {
  id: number;
  imgSrc: string;
  imgAlt: string;
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
  flip: boolean;
}
