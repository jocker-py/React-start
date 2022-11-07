import React, { FC } from 'react';
import cl from './pagination.module.css';
import { IPaginationProps } from '../../redux/interfaces';
import { getPageNumbers } from '../UI/helper/helpers';
import { changePageActionCreator } from '../../redux/state';

const Pagination: FC<IPaginationProps> = ({ state, dispatch }) => {
  const { page, totalPages, buttons } = state;
  const pageNumbers = getPageNumbers(page, totalPages);
  return (
    <div className={cl.container}>
      <button
        className={cl.page}
        onClick={() => dispatch(changePageActionCreator('first'))}
        disabled={buttons.first}
      >
        {'◀︎◀︎'}
      </button>
      <button
        className={cl.page}
        onClick={() => dispatch(changePageActionCreator('prev'))}
        disabled={buttons.prev}
      >
        {'◀︎'}
      </button>
      {pageNumbers &&
        pageNumbers.map((pageNumber, index) => (
          <button
            key={index}
            className={pageNumber === page ? [cl.page, cl.active].join(' ') : cl.page}
            onClick={(e) => dispatch(changePageActionCreator(e.currentTarget.innerHTML))}
          >
            {pageNumber}
          </button>
        ))}
      <button
        className={cl.page}
        onClick={() => dispatch(changePageActionCreator('next'))}
        disabled={buttons.next}
      >
        {'▶︎'}
      </button>
      <button
        className={cl.page}
        onClick={() => dispatch(changePageActionCreator('last'))}
        disabled={buttons.last}
      >
        {'▶︎▶︎'}
      </button>
    </div>
  );
};

export default Pagination;
