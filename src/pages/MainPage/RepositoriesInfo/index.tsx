import { useEffect, useState } from 'react';

import { RepositoryCard } from 'components/RepositoryCard';
import { CurrentItems, Pagination, RepositoryList, StyledReactPaginate } from './styled';
import { useAppSelector } from 'store/hooks';
import { Repo } from 'service/apiService';

const RepositoriesList = ({ currentItems }: { currentItems: Repo[] }) => {
  return (
    <RepositoryList>
      {currentItems &&
        currentItems.map((item, index) => (
          <RepositoryCard
            key={index}
            name={item.name}
            description={item.description}
            link={item.html_url}
          />
        ))}
    </RepositoryList>
  );
};

export const RepositoriesInfo = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const repos = useAppSelector((state) => state.searchReducer.result?.repos)!;

  const [currentItems, setCurrentItems] = useState<Repo[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
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
    </>
  );
};
