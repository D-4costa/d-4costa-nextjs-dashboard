export const metadata = {
  title: 'Invoices',
};

import Footer from "../../ui/footer";
import Search from "../../ui/search";
import Table from "../../ui/invoices/table";
import Pagination from "../../ui/invoices/pagination";

import { fetchInvoicesPages } from "../../lib/data";

import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../../ui/skeletons";

export default async function InvoicesPage(props) {

  const searchParams = await props.searchParams;

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchInvoicesPages(query);

  return (
    <main>

      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Invoices
      </h1>

      <div style={{ marginBottom: "20px" }}>
        <Search placeholder="Search invoices..." />
      </div>

      <Suspense
        key={query + currentPage}
        fallback={<InvoicesTableSkeleton />}
      >
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div style={{ marginTop: "20px" }}>
        <Pagination totalPages={totalPages} />
      </div>

      <Footer />

    </main>
  );
}
