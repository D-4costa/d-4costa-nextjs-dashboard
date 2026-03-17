export default function EditForm({ invoice, customers }) {
    return (
      <form>
        <h2>Edit Invoice</h2>
  
        <select defaultValue={invoice.customer_id}>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
  
        <br /><br />
  
        <input type="number" defaultValue={invoice.amount} />
  
        <br /><br />
  
        <button>Save</button>
      </form>
    );
  }