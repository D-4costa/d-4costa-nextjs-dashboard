'use client';

import { createInvoice } from '@/app/lib/actions';

export default function Form({ customers }) {
  return (
    <form action={createInvoice}>

      <select name="customerId">
        <option value="">Select Customer</option>
        {customers.map((customer) => (
          <option key={customer.id} value={customer.id}>
            {customer.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        name="amount"
        placeholder="Amount"
      />

      <label>
        <input type="radio" name="status" value="pending"/>
        Pending
      </label>

      <label>
        <input type="radio" name="status" value="paid"/>
        Paid
      </label>

      <button type="submit">
        Create Invoice
      </button>

    </form>
  );
}
