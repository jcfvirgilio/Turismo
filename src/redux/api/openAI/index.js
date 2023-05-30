import React from 'react';
import { Configuration, OpenAIApi } from 'openai';
import environment from '../../../../environment';
import 'react-native-url-polyfill/auto';

const { openaiId } = environment();

const configuration = new Configuration({
  apiKey: openaiId,
});

function generatePrompt() {
  return `
  Muestra  los 2 de lugares mas recomendados a visitar en Monterrey de acuerdo a los siguientes hobbies: nadar, cultura y musica, dame la información de la siguiente forma que empieze  el titulo de "lugar", "descripcion" debe ser muy breve y "ubicacion", continua hasta terminar los 2 lugar mas recomendados
   `;
}

export async function OpenAI() {
  return `Lugar: Parque Ecológico Chipinque 
Descripción: Es una de las áreas verdes más grandes de la ciudad de Monterrey, ofreciendo senderos para caminar, correr, andar en bicicleta, acampar y hasta nadar.
Descubierto: Ubicado en el municipio de San Pedro Garza García

Lugar: Parque Fundidora
Descripción: Es el parque más grande de Monterrey. Cuenta con un lago para nadar, áreas verdes, cines, museos de arte moderno, teatro, restaurantes y pubs con música en vivo.
Ubicación: Ubicado en el municipio de Monterrey.`;

  const openai = new OpenAIApi(configuration);

  if (!configuration.apiKey) {
    console.log('dentro del configuration.apiKey');
    return 'OpenAI API key no esta configurado';
  }

  try {
    const gptResult = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(),
      temperature: 1,
      max_tokens: 256,
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
