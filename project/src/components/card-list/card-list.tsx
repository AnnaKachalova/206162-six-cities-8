import Card from '../card/card';
import{ Offers } from '../../types/offer';

type CardListProps = {
  offers:Offers;
  onListItemHover?: (listItemId: number) => void;
  className: string;
};

function CardList({offers, onListItemHover, className}: CardListProps): JSX.Element {
  const isMainCard = className  === 'cities';
  return (
    <div className={`${className}__places-list places__list ${isMainCard ? 'tabs__content':''}`}>
      {offers.map((element) => (
        <Card key={`${element.id}-card`} offer={element} onListItemHover={onListItemHover} className={className}/>
      ))}
    </div>
  );
}

export default CardList;
