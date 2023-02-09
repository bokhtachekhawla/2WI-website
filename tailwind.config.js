/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    screens:{
      'xs':'400px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',

    },
    extend: {
      
        colors: {
          'background':'#000',
          'white' : "#fff",
          'purple': '#ae00fb',    
          'secondary': '#10b981 ',  
          'secondary2' :'#57ffdc',
          
          
        

        },
        // fontFamily: {
        //   sans: ['Spartan', 'sans-serif'],
        // },
      
    },
  },
  plugins: [],
}
