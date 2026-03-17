"use client";

import { useSearchParams, usePathname } from "next/navigation";

export default function Pagination({ totalPages }) {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(page) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page);
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div>
      Page {currentPage} of {totalPages}
    </div>
  );
}
