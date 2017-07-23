import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

const List = ({ children, className, paginator }) => {
  const { currentPageNumber, itemsPerPage, setPageNumber, totalItemsCount } = paginator;
  const showPaginator = totalItemsCount > itemsPerPage;
  return (
    <div className={className}>
      <div className="list">{children}</div>
      <div className="pagination">
        { showPaginator &&
          <Pagination
            activePage={currentPageNumber}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItemsCount}
            onChange={setPageNumber}
            pageRangeDisplayed={3}
          />
        }
      </div>
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  paginator: PropTypes.shape({
    currentPageNumber: PropTypes.number,
    itemsPerPage: PropTypes.number,
    totalItemsCount: PropTypes.number,
    setPageNumber: PropTypes.func,
  }).isRequired,
};

export default Styled(List)`
  .list {
    width: 560px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .pagination {
    display: flex;
    justify-content: center
  }
`;
