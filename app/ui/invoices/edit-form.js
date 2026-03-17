'use client';

import { updateInvoice } from '@/app/lib/actions';

export default function EditForm({ invoice, customers }) {

  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);

  return (
    <form action={updateInvoiceWithId}>

      <select name="customerId" defaultValue={invoice.customer_id}>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="amount"
        defaultValue={invoice.amount / 100}
      />

      <button type="submit">
        Update Invoice
      </button>

    </form>
  );
}
