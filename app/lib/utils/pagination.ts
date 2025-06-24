export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less, display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  // If current page is within the first 3 pages, show the first 3, an ellipsis, and the last 2 pages
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages]
  }

  // If current page is within the last 3 pages, show the first 2, an ellipsis, and the last 3 pages
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages
  ]
}
