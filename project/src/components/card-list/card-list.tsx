import {Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';

import {State} from '../../types/state';
import {Actions} from '../../types/action';

import {changeCity, fillCityList} from '../../store/action';

import Card from '../card/card';
import{Offers} from '../../types/offer';

type CardListProps = {
  onListItemHover?: (listItemId: number) => void;
  className: string;
};

const mapStateToProps = ({offers}: State) => ({
  offers,
});

// С использованием bindActionCreators
const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(nameCity:string, offers:Offers) {
    dispatch(changeCity(nameCity));
    dispatch(fillCityList(offers, nameCity));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CardListProps;

function CardList(props: ConnectedComponentProps): JSX.Element {
  const {onListItemHover, className, offers} = props;
  const isMainCard = className  === 'cities';
  return (
    <div className={`${className}__places-list places__list ${isMainCard ? 'tabs__content':''}`}>
      {offers.map((element) => (
        <Card key={element.id} offer={element} onListItemHover={onListItemHover} className={className}/>
      ))}
    </div>
  );
}

export {CardList};
export default connector(CardList);
