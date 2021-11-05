import { Link } from 'react-router-dom';
import { SORT_TYPES } from '../../const';

type SortListProps = {
  onChangeSort: (sort: string) => void;
  activeSort: string;
};

function SortList({
  onChangeSort,
  activeSort,
}: SortListProps): JSX.Element {
  return (
    <ul className='places__options places__options--custom places__options--opened'>
      {Object.keys(SORT_TYPES).map((keyOfSort) => (
        <Link to='#' onClick={() => onChangeSort(keyOfSort)} key={keyOfSort}>
          <li className={`${activeSort === keyOfSort && 'places__option--active'} places__option`}tabIndex={0}>
            {keyOfSort}
          </li>
        </Link>
      ))}
    </ul>
  );
}
export default SortList;
