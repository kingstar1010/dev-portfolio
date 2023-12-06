import { Inter, Urbanist } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const urbanist = Urbanist({ subsets: ['latin'], variable: '--font-urbanist' });

export const InterFont = inter;
export const UrbanistFont = urbanist;
