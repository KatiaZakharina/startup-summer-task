import { useEffect, useState } from 'react';

import { RepositoryCard } from 'pages/MainPage/RepositoryCard';
import {
  CurrentItems,
  Pagination,
  RepositoryCount,
  RepositoryList,
  StyledReactPaginate,
  StyledRepositoriesInfo,
} from './styled';
import { SearchState } from '../SearchState';
import { useAppSelector } from 'store/hooks';
import { Repo } from 'service/apiService';
import { PER_PAGE } from 'appConstants';

const RepositoriesList = ({ currentItems }: { currentItems: Repo[] }) => {
  return (
    <RepositoryList>
      {currentItems.map((item, index) => (
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

export const RepositoriesInfo = () => {
  const repos = useAppSelector((state) => state.searchReducer.result?.repos);

  const [currentItems, setCurrentItems] = useState<Repo[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = PER_PAGE;

  useEffect(() => {
    if (!repos) return;

    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, repos]);

  const handlePageClick = (event: { selected: number }) => {
    if (!repos) return;

    const newOffset = (event.selected * itemsPerPage) % repos.length;
    setItemOffset(newOffset);
  };

  return !repos?.length ? (
    <SearchState searchResult="empty_repository_list" />
  ) : (
    <StyledRepositoriesInfo>
      <RepositoryCount>Repositories ({repos.length})</RepositoryCount>
      <>
        <RepositoriesList currentItems={currentItems} />

        <Pagination>
          <CurrentItems>5-8 of 249 items</CurrentItems>
          {/* FIXME: */}

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
    </StyledRepositoriesInfo>
  );
};
