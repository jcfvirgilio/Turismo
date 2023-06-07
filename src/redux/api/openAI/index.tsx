import { Configuration, OpenAIApi } from 'openai';
import environment from '../../../../environment';
import 'react-native-url-polyfill/auto';

type propsPayload = {
  destiny: string;
  hobbies: string;
};

const { openaiId } = environment();

const configuration = new Configuration({
  apiKey: openaiId,
});

function generatePrompt({ destiny, hobbies }: propsPayload) {
  return `
  Muestra  los 3 de lugares mas recomendados a visitar en ${destiny} de acuerdo a los siguientes hobbies: ${hobbies}, dame la información de la siguiente forma que empiece  el titulo de "Title", "Description" debe ser muy breve, "Location" y geolocal en un mapa, continua hasta terminar los 3 lugar mas recomendados, hay que separar cada bloque con un @, ejemplo del resultado : Title:|Description:|Location:|geolocal: @Title:|Description:|Location:|geolocal:
   `;
}

export async function OpenAI(payload: propsPayload) {
  //console.log('PROMPTTTTTT::::::::::::::::::::::::::', generatePrompt(payload));
  // return `Title: JC Teatro del Bicentenario|Description: Teatro con representaciones de todo género.|Location: Av. Corregidora No. 102, Centro Histórico, 76050 Querétaro, Qro.|geolocal: 20.591807,-100.387743 @Title: Recinto Cultural La Esperanza|Description: Lugar de expresiones artísticas con óperas, música, teatro, etc.|Location: Miguel Lerdo de Tejada No. 516, Col. Centro, 76000 Querétaro, Qro.|geolocal: 20.592432,-100.38635 @Title: Barcito Nómada|Description: Espacio gastronómico cervecero con actividades culturales.|Location: Morones No. 1, El Paraíso, 76140 Querétaro, Qro.|geolocal: 20.584882,-100.423615`;

  const openai = new OpenAIApi(configuration);

  if (!configuration.apiKey) {
    console.log('dentro del configuration.apiKey');
    return 'OpenAI API key no esta configurado';
  }

  try {
    const gptResult = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(payload),
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return gptResult.data.choices[0].text;
  } catch (error) {
    console.log('ERROR::', error);
    return error;
  }
}
