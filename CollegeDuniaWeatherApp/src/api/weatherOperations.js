import {create} from 'apisauce';
import {baseUrl} from './url';

export const weatherOperations = {
  getCurrentWeather: () =>
    new Promise(async (resolve, reject) => {
      try {
        const api = create({
          baseURL: baseUrl,
        });
        const data = await api.get(
          'onecall?lat=27.2038&lon=77.5011&units=metric&&lang=en&&appid=3814359d4a6b53c2931b6e8fa6689c97',
        );
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }),
};
