export async function fetchCustomers() {
    return [
      { id: "1", name: "Emily Johnson" },
      { id: "2", name: "Carlos Ramirez" },
      { id: "3", name: "Sophia Lee" }
    ];
  }
  
  export async function fetchInvoiceById(id) {
    return {
      id,
      customer_id: "1",
      amount: 100
    };
  }
  
  export async function fetchInvoicesPages() {
    return 1;
  }