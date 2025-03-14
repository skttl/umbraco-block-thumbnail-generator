import sharp from 'sharp';

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const backgroundColor = '#162435';
const colors = {
  primary: '#3746b9',
  white: '#ffffff',
  accent: '#f9bdb8',
  light: '#f2eae5',
  gold: '#9e7f4e'
};

const generateIcon = async (size) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
      <rect width="24" height="24" x="0" y="0" fill="${backgroundColor}" rx="4.8"/>
      <path fill="${colors.primary}" d="M2.5 6h12v12h-12z"/>
      <path fill="${colors.accent}" d="M16.5 6h5v5h-5z"/>
      <path fill="${colors.gold}" d="M16.5 13h5v5h-5z"/>
      <path fill="${colors.white}" d="M10.998 15.5q.416 0 .709-.291t.293-.707t-.291-.709t-.707-.293t-.709.291t-.293.707t.291.709t.707.293"/>
      <path fill="${colors.light}" d="M5.95 15.239l5.789-5.789l-.689-.688l-5.788 5.788z"/>
      <path fill="${colors.white}" d="M5.998 10.5q.415 0 .709-.291T7 9.502t-.291-.709t-.707-.293t-.709.291T5 9.498t.291.709t.707.293"/>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(`./public/icons/icon-${size}x${size}.png`);
};

Promise.all(sizes.map(size => generateIcon(size)))
  .then(() => console.log('Icons generated successfully'))
  .catch(err => console.error('Error generating icons:', err));
