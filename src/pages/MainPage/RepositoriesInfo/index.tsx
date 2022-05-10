import { useEffect, useState } from 'react';

import { RepositoryCard } from 'components/RepositoryCard';

import {
  CurrentItems,
  Pagination,
  RepositoryCount,
  RepositoryList,
  StyledReactPaginate,
  StyledRepositoriesInfo,
} from './styled';

const items = Array(50)
  .fill(0)
  .map((_, index) => index + 1);

const RepositoriesList = ({ currentItems }: { currentItems: number[] }) => {
  return (
    <>
      <RepositoryCount>Repositories (249)</RepositoryCount>
      <RepositoryList>
        {currentItems &&
          currentItems.map((item, index) => (
            <RepositoryCard
              key={index}
              name={`react-hot-loader ${item}`}
              description="Tweak React components in real time. (Deprecated: use Fast Refresh instead."
            />
          ))}
      </RepositoryList>
    </>
  );
};

export const RepositoriesInfo = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const [currentItems, setCurrentItems] = useState<number[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <StyledRepositoriesInfo>
      <RepositoriesList currentItems={currentItems!} />

      <Pagination>
        <CurrentItems>5-8 of 249 items</CurrentItems>

        <nav>
          <StyledReactPaginate
            previousLabel="<"
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            previousClassName="previous"
            nextClassName="next"
            activeClassName="active"
            renderOnZeroPageCount={() => null}
          />
        </nav>
      </Pagination>
    </StyledRepositoriesInfo>
  );
};
