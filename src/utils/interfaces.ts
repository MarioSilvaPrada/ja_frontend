interface ImageProps {
  id: number;
  image: string;
  image_name: string;
  section: string | number;
}

export interface ISettings {
  id: number;
  admin_address: string;
  admin_email: string;
  admin_name: string;
  admin_phone_number: string;
  main_background_image: string;
  description: string;
}

export interface IProjects {
  id: number;
  main_image: string;
  name: string;
  tags: Array<number>;
  architects: string;
  engineering: string;
  photgraphs: string;
  area: string;
  tipology: string;
  section: Array<{
    id: number;
    project: number;
    section_name: string;
    description: string;
    image: Array<ImageProps>;
  }>;
}
