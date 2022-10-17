module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'expletussans': ['Expletus Sans', 'cursive'] ,
        'paytone': ['Paytone One', 'sans-serif'],
      },
    },
    colors:{
      primary: '#001427',
      secondary: '#F4D58D',
      tertiary: '#81D2C7',
      white: '#ffffff',
      black: "#000000",
      
    }
  },
  plugins: [

]
}
