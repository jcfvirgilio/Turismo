import { extendTheme } from 'native-base';


export const theme = extendTheme({
  colors: {
    customWhite: '#FFF',
    customCreme: '#DEEFE7',
    customBlue: '#002333',
    customTeal: '#159A9C',
    customGray: '#012E40',
    customButton: '#FC990E',
    customButtonGoogle: '#2F5DAB'
  },
  fonts: {
    heading: 'Quattrocento-Bold',
    body: 'Quattrocento-Regular',
  },

  styles: {
    global: {
      'headerBarClass': {
        backgroundColor: '#0956FA',
        justifyContent: "space-between",
        padding: 10
      },
      'inputClass': {
        color: 'black',
        fontSize: 15,
        margin: 10

      },
      'headerClass': {
        color: '#012E40',
        fontFamily: 'Quattrocento-Bold',
        fontSize: 32,
        fontWeight: 'bold',
        letterSpacing: 4,
        paddingBottom: 20
      },
      'bodyClass': {
        fontFamily: 'Quattrocento-Regular',
        color: '#012E40',
        fontSize: 16,
        letterSpacing: 0.5,
      }

    },
  },


});