import {ActionType, ChangeCityAction, FillCityListAction} from '../types/action';
import { Offers } from '../types/offer';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const fillCityList = (offers : Offers): FillCityListAction => ({
  type: ActionType.FillCityList,
  payload: offers,
});