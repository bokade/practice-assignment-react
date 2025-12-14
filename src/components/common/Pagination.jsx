export default function Pagination({ page, size, total, onPageChange }) {
  const totalPages = Math.ceil(total / size);

  return (
    <div className="pagination">
      <button disabled={page === 0} onClick={() => onPageChange(page - 1)}>
        Prev
      </button>

      <span>{page + 1} / {totalPages}</span>

      <button
        disabled={page + 1 >= totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
