import { useMemo } from "react";

// Возвращает целое количество страниц
export function usePagination(totalPages) {
  const pagination = useMemo(() => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1)
    }

    return pagesArray;
  }, [totalPages])

  return pagination;
}
