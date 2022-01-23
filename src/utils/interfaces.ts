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
  description: string;
  description_en: string;
  about_me_image: string;
  company_file?: string;
}

export interface IProjects {
  id: number;
  position: string;
  main_image: string;
  hover_image: string;
  name: string;
  name_en: string;
  tags: Array<number>;
  architects: string;
  engineering: string;
  photographs: string;
  images: string;
  area: string;
  tipology: string;
  construction: string;
  state: string;
  program: string;
  client: string;
  location: string;
  year: string;
  is_active: boolean;
  section: Array<{
    id: number;
    project: number;
    section_name: string;
    description: string;
    description_en: string;
    image: Array<ImageProps>;
  }>;
}
