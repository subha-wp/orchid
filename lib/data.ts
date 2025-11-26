import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'content.json');

export interface HeroImage {
  url: string;
  alt: string;
}

export interface HeroContent {
  images: HeroImage[];
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
}

export interface GalleryImage {
  url: string;
  category: string;
  alt: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
}

export interface ContentData {
  hero: HeroContent;
  gallery: {
    images: GalleryImage[];
  };
  services: Service[];
  facilities: string[];
}

export async function getContent(): Promise<ContentData> {
  try {
    const fileContent = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    // Return default data if file doesn't exist
    return {
      hero: {
        images: [],
        title: '',
        subtitle: '',
        description: '',
        tagline: ''
      },
      gallery: {
        images: []
      },
      services: [],
      facilities: []
    };
  }
}

export async function saveContent(data: ContentData): Promise<void> {
  // Ensure data directory exists
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

