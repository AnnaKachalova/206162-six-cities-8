import Card from '../card/card';
import{Offers} from '../../types/offer';

type CardListProps = {
    offers: Offers;
};

function CardList({offers}:CardListProps): JSX.Element {
  return (
    <div className='cities__places-list places__list tabs__content'>
      {offers.map((element) => (
        <Card key={element.id} offer={element}/>
      ))}
    </div>
  );
}
export default CardList;
