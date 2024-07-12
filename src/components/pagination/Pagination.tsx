import { useState } from 'react';

import './Pagination.css';
import useLocalStorage from '../../hooks/UseLocalStorage';

interface PaginationProps {
  currentPage: number;
  pagesUmmount: number;
  updatePageCallback: (pageNumber: number) => void;
}

const Pagination = ({
  updatePageCallback,
  pagesUmmount,
  currentPage,
}: PaginationProps) => {
  const { checkSearchQuery } = useLocalStorage();
  const [isSearched] = useState<boolean>(checkSearchQuery());

  return isSearched ? null : (
    <div className="pagination">
      {Array.from({ length: pagesUmmount }, (item, index) => (
        <button
          key={index}
          onClick={() => {
            updatePageCallback(index + 1);
          }}
          className={`pagination_button ${currentPage === index + 1 ? 'active' : ''}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
