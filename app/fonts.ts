import localFont from 'next/font/local';

export const fraunces = localFont({
  src: [
    {
      path: '../public/fonts/Fraunces_144pt_SuperSoft-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Fraunces_144pt_SuperSoft-Black.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-fraunces',
  display: 'swap',
});
