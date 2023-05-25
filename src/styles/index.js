import { extendTheme } from 'native-base';


export const theme = extendTheme({
  colors: {
    customWhite: '#FFF',
    customCreme: '#DEEFE7',
    customBlue: '#002333',
    customTeal: '#159A9C',
    customGray: '#012E40'
  },
  fonts: {
    // heading: 'Quattrocento-Bold',
    // body: 'Quattrocento-Regular',
  },

  styles: {
    global: {
      'headerClass': {
        color: '#012E40',
        //   fontFamily: 'Quattrocento-Bold',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 4
      },
      'bodyClass': {
        // fontFamily: 'Quattrocento-Regular',
        color: '#012E40',
        fontSize: 14,
        letterSpacing: 0.5
      }

    },
  },

  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },

});