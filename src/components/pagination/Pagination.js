export default function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  const isFirstPage = page === 1;
  const isLastPage = page === numPages;
  const isExistPage = total !== 0;

  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const movePage = (pageIndex) => {
    setPage(pageIndex);
  };

  return (
    <>
      <div className={isExistPage ? "" : "disabled-pagination"}>
        <button onClick={previousPage} disabled={isFirstPage}>
          &lt;
        </button>
        {Array.from({ length: numPages }, (_, index) => index + 1).map(
          (pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => movePage(pageIndex)}
              aria-current={page === pageIndex ? "page" : undefined}
            >
              {pageIndex}
            </button>
          )
        )}
        <button onClick={nextPage} disabled={isLastPage}>
          &gt;
        </button>
      </div>
    </>
  );
}
