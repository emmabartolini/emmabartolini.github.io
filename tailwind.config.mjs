/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        ink: '#3B0310',
        design: '#FF5733',
        video: '#7C3AED',
        writing: '#2563EB',
        education: '#16A34A',
        curatela: '#DB2777',
      },
      fontFamily: {
        serif: ['"Shippori Antique B1"', 'serif'],
        body: ['"Shippori Mincho"', 'serif'],
      },
      letterSpacing: {
        tight: '-0.06em',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
};
