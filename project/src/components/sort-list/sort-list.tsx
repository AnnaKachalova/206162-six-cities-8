import React, { useState } from 'react';
import { SORT_TYPES } from '../../const';

type SortListProps = {
  onChangeSort: (sort: string) => void;
  activeSort: string;
};

function SortList({ onChangeSort, activeSort }: SortListProps): JSX.Element {

  const [openedSort, setOpenedSort] = useState(false);

  const onSortedClick = () => {
    if(openedSort){
      setOpenedSort(false);
    } else {
      setOpenedSort(true);
    }
  };

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0} onClick={() => onSortedClick()}>
        {activeSort}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>

      <ul className={`${openedSort && 'places__options--opened'} places__options places__options--custom`}>
        {Object.values(SORT_TYPES).map((keyOfSort) => (
          <li onClick={() => onChangeSort(keyOfSort)} key={`${keyOfSort}-sort`}
            className={`${
              activeSort === keyOfSort && 'places__option--active'
            } places__option`}
            tabIndex={0}
          >
            {keyOfSort}
          </li>
        ))}
      </ul>
    </form>
  );
}
export default SortList;
