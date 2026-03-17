export default function Form({ customers }) {
    return (
      <form>
        <h2>Create Invoice</h2>
  
        <select>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
  
        <br /><br />
  
        <input type="number" placeholder="Amount" />
  
        <br /><br />
  
        <button>Create</button>
      </form>
    );
  }