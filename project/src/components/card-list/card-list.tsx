import Card from '../card/card';
import{Offers} from '../../types/offer';

type CardListProps = {
    offers: Offers;
    onListItemHover: (listItemId: number) => void;
};

function CardList({offers, onListItemHover}:CardListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((element) => (
        <Card key={element.id} offer={element} onListItemHover={onListItemHover}/>
      ))}
    </div>
  );
}
export default CardList;
