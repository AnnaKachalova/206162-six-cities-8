import { Link } from 'react-router-dom';
import { SORT_TYPES } from '../../const';

type SortListProps = {
  onChangeSort: (sort: string) => void;
  activeSort: string;
};

function SortList({ onChangeSort, activeSort }: SortListProps): JSX.Element {
  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        {activeSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>

      <ul className='places__options places__options--custom places__options--opened'>
        {Object.keys(SORT_TYPES).map((keyOfSort) => (
          <Link to='#' onClick={() => onChangeSort(keyOfSort)} key={keyOfSort}>
            <li
              className={`${
                activeSort === keyOfSort && 'places__option--active'
              } places__option`}
              tabIndex={0}
            >
              {keyOfSort}
            </li>
          </Link>
        ))}
      </ul>
    </form>
  );
}
export default SortList;
