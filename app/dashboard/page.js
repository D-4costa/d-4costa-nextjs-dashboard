export const metadata = {
  title: 'Dashboard',
};

import { Suspense } from "react";
import Footer from "../ui/footer";

import CardWrapper from "../ui/dashboard/cards";
import RevenueChart from "../ui/dashboard/revenue-chart";
import LatestInvoices from "../ui/dashboard/latest-invoices";

import {
  CardsSkeleton,
  RevenueChartSkeleton,
  LatestInvoicesSkeleton
} from "../ui/skeletons";

export default async function Dashboard() {
  return (
    <main>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom: "40px"
        }}
      >
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginBottom: "40px"
        }}
      >
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>

        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
