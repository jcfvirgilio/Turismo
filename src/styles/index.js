import { extendTheme } from 'native-base';
import { Platform } from 'react-native';



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
      'label': {
        color: 'silver',
        fontSize: 15,
        marginTop: -10,
        marginBottom: 40,
      },
      'inputClass': {
        color: 'black',
        fontSize: 22,
        margin: 10
      },
      'headerClass': {
        color: '#012E40',
        fontFamily: 'Quattrocento-Bold',
        fontSize: Platform.OS === 'ios' ? 33 : 28,
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