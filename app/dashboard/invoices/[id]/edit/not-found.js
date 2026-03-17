import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <h2>404 Not Found</h2>
      <p>Invoice not found.</p>

      <Link href="/dashboard/invoices">
        Go Back
      </Link>
    </main>
  );
}
