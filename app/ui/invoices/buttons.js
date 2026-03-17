import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/actions';

export function UpdateInvoice({ id }) {
  return (
    <Link href={`/dashboard/invoices/${id}/edit`}>
      Edit
    </Link>
  );
}

export function DeleteInvoice({ id }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <form action={deleteInvoiceWithId}>
      <button type="submit">
        Delete
      </button>
    </form>
  );
}
