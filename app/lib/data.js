import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

export async function fetchRevenue() {
  try {
    const data = await sql`SELECT * FROM revenue`;
    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue.');
  }
}

export async function fetchLatestInvoices() {
  try {
    const data = await sql`
      SELECT invoices.amount, customers.name, customers.email
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5
    `;
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchCardData() {
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;

    const invoiceStatusPromise = sql`
      SELECT
      SUM(CASE WHEN status='paid' THEN amount ELSE 0 END) AS paid,
      SUM(CASE WHEN status='pending' THEN amount ELSE 0 END) AS pending
      FROM invoices
    `;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise
    ]);

    const numberOfInvoices = Number(data[0][0].count);
    const numberOfCustomers = Number(data[1][0].count);

    return {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices: data[2][0].paid,
      totalPendingInvoices: data[2][0].pending
    };
  } catch (error) {
    console.error(error);
  }
}
