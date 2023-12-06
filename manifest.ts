import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Albert-Andrei Moldovanu',
    short_name: 'AAMoldovanu',
    description:
      'This website is my portfolio, here I share my projects, skills, contact information, and a lot of other useful stuff. Feel free to take a look :D',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
