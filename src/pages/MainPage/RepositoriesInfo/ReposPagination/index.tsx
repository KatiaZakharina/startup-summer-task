import { CurrentItems, Pagination, StyledReactPaginate } from './styled';
import { REPO_PER_PAGE } from 'appConstants';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { changePage, fetchReposData } from 'store/search/searchSlice';

export const ReposPagination = () => {
  const dispatch = useAppDispatch();
  const reposNum = useAppSelector((state) => state.searchReducer.result?.user?.public_repos) || 0;
  const { query, currentPage } = useAppSelector((state) => state.searchReducer);

  const pageCount = Math.ceil(reposNum / REPO_PER_PAGE);
  const startsWith = (currentPage - 1) * REPO_PER_PAGE + 1;
  const endsWith = Math.min(startsWith + REPO_PER_PAGE - 1, reposNum);

  const onChange = (event: { selected: number }) => {
    dispatch(changePage(event.selected + 1));
    dispatch(fetchReposData({ userName: query, page: event.selected + 1 }));
  };
  return (
    <Pagination>
      <CurrentItems>{`${startsWith} - ${endsWith}  of ${reposNum} items`}</CurrentItems>

      <nav>
        <StyledReactPaginate
          previousLabel="<"
          breakLabel="..."
          nextLabel=">"
          onPageChange={onChange}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousClassName="previous"
          nextClassName="next"
          activeClassName="active"
          renderOnZeroPageCount={() => null}
          forcePage={currentPage - 1}
        />
      </nav>
    </Pagination>
  );
};
