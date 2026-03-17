export const metadata = {
  title: 'Customers',
};

import Footer from "../../ui/footer";

export default function CustomersPage() {
  const customers = [
    { name: "Emily Johnson", email: "emily@email.com", company: "TechCorp" },
    { name: "Carlos Ramirez", email: "carlos@email.com", company: "MarketPro" },
    { name: "Sophia Lee", email: "sophia@email.com", company: "DataVision" },
    { name: "Daniel Smith", email: "daniel@email.com", company: "CloudBase" }
  ];

  return (
    <main>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>Customers</h1>

      <table
        style={{
          width: "100%",
          background: "white",
          borderRadius: "10px",
          borderCollapse: "collapse"
        }}
      >
        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th style={{ padding: "12px" }}>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email} style={{ textAlign: "center" }}>
              <td style={{ padding: "10px" }}>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.company}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </main>
  );
}
