import { NavLink, useSearchParams } from '@remix-run/react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { RootState } from '../../store/Store';

import './Pagination.css';

interface PaginationProps {
  pagesCount: number;
  isTest?: boolean;
}

const PaginationRaw = ({ pagesCount, isTest }: PaginationProps) => {
  const location = useLocation().pathname;
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') || '';
  const currentPage = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1;

  return (
    <div className="pagination">
      {Array.from({ length: pagesCount }, (_, index) => (
        <NavLink
          key={index}
          to={`/?page=${index + 1}&search=${query}`}
          className={`pagination_button ${currentPage === index + 1 ? 'active_link' : ''}`}
          data-testid={`page_button_${index + 1}`}
        >
          {index + 1}
        </NavLink>
      ))}
      {isTest ? <p data-testid="path">{location}</p> : null}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  const { page } = state;

  return { currentPage: page.currentPage };
};

const Pagination = connect(mapStateToProps)(PaginationRaw);

export default Pagination;
