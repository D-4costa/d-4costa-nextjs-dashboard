export const metadata = {
  title: 'Edit Invoice',
};

import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import EditForm from '@/app/ui/invoices/edit-form';

export default async function Page({ params }) {
  const id = params.id;

  const invoice = await fetchInvoiceById(id);
  const customers = await fetchCustomers();

  return (
    <EditForm invoice={invoice} customers={customers}/>
  );
}
