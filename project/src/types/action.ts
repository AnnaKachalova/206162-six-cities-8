import { Offers } from '../types/offer';

export enum ActionType {
    ChangeCity = 'game/incrementMistake',
    FillCityList = 'game/incrementStep',
}

export type ChangeCityAction = {
    type: ActionType.ChangeCity;
    payload: string;
};

export type FillCityListAction = {
    type: ActionType.FillCityList;
    payload: Offers;
};

export type Actions = ChangeCityAction | FillCityListAction;
