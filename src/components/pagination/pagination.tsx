import React, { FC, useState } from 'react';
import cl from './pagination.module.css';

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

const getPageNumbers = (current: number, total: number) => {
  const arr = Array(total)
    .fill(1)
    .map((x: number, index: number) => x * (index + 1));
  if (current < 3) return arr.slice(0, 5);
  if (current > total - 3) return arr.slice(-5);
  return arr.slice(current - 3, current + 2);
};

const Pagination: FC<IPaginationProps> = (props) => {
  const pageNumbers = getPageNumbers(props.currentPage, props.totalPages);
  const [buttonsDisabled, setButtonsDisable] = useState({
    first: true,
    last: false,
    next: false,
    prev: true,
  });

  const getDisabledState = (moveTo: number, total: number) => {
    return {
      first: moveTo <= 1,
      prev: moveTo <= 1,
      last: moveTo >= total,
      next: moveTo >= total,
    };
  };
  const changePage = (action: string, page?: number) => {
    switch (action) {
      case 'page':
        page && props.setPage(page);
        page && setButtonsDisable(getDisabledState(page, props.totalPages));
        return;
      case 'first':
        props.setPage(1);
        setButtonsDisable(getDisabledState(1, props.totalPages));
        return;
      case 'last':
        props.setPage(props.totalPages);
        setButtonsDisable(getDisabledState(props.totalPages, props.totalPages));
        return;
      case 'next':
        props.setPage(props.currentPage + 1);
        setButtonsDisable(getDisabledState(props.currentPage + 1, props.totalPages));
        return;
      case 'prev':
        props.setPage(props.currentPage - 1);
        setButtonsDisable(getDisabledState(props.currentPage - 1, props.totalPages));
        return;
    }
  };
  return (
    <div className={cl.container}>
      <button
        className={cl.page}
        onClick={() => changePage('first')}
        disabled={buttonsDisabled.first}
      >
        {'◀︎◀︎'}
      </button>
      <button
        className={cl.page}
        onClick={() => changePage('prev')}
        disabled={buttonsDisabled.prev}
      >
        {'◀︎'}
      </button>
      {pageNumbers &&
        pageNumbers.map((pageNumber, index) => (
          <button
            key={index}
            className={pageNumber === props.currentPage ? [cl.page, cl.active].join(' ') : cl.page}
            onClick={(e) => changePage('page', Number(e.currentTarget.innerHTML))}
          >
            {pageNumber}
          </button>
        ))}
      <button
        className={cl.page}
        onClick={() => changePage('next')}
        disabled={buttonsDisabled.next}
      >
        {'▶︎'}
      </button>
      <button
        className={cl.page}
        onClick={() => changePage('last')}
        disabled={buttonsDisabled.last}
      >
        {'▶︎▶︎'}
      </button>
    </div>
  );
};

export default Pagination;
