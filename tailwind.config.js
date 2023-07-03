/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        enavy:'#031926',
        eg1:'#468189',
        eg2:'#77ACA2',
        eg3:'#9DBEBB',
        epeach:'#F4E9CD',
      },
    },
    fontFamily:{
      'headingFont': ['Ubuntu', 'Courier New'],
      'descFont': ['Raleway', 'serif'],
      'exclaim':['Oleo Script','cursive'],
    },
  },
  plugins: [],
}

