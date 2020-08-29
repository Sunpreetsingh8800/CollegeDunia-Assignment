import {Types} from './types';

export const setCurrentPosition = (currentPosition) => ({
  type: Types.CURRENT_POSITION,
  payload: currentPosition,
});
