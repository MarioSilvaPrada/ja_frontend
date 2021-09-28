interface ImageProps {
  id: number;
  image: string;
  image_name: string;
  section: string | number;
}

export interface ISettings {
  main_background_image: string;
  name: string;
}

export interface IProjects {
  id: number;
  main_image: string;
  name: string;
  section: Array<{
    id: number;
    project: number;
    section_name: string;
    description: string;
    image: Array<ImageProps>;
  }>;
}
