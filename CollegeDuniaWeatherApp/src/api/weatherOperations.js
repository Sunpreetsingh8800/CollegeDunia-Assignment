import {create} from 'apisauce';
import {baseUrl, apikey} from './url';
import {store} from '../store';

export const weatherOperations = {
  getCurrentWeather: () =>
    new Promise(async (resolve, reject) => {
      try {
        const currentPosition =
          store.getState() &&
          store.getState().locationReducer &&
          store.getState().locationReducer.currentPosition;
        const api = create({
          baseURL: baseUrl,
        });
        const data = await api.get(
          `onecall?lat=${currentPosition.latitude}&lon=${currentPosition.longitude}&units=metric&&lang=en&&appid=${apikey}`,
        );
        resolve(data);
      } catch (err) {
        reject(err);
      }
    }),
};
