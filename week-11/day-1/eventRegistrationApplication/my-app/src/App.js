import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    firstName: "",
    secondName: "",
    password: ""
  })

  const [submitted, setSubmitted] = useState(false);

  function updateForm(e) {
    setSubmitted(false);
    setForm(ps => {
      return {
        ...ps,
        [e.target.name]: e.target.value
      }
    })
  }

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <label>
          <input type="text" id="firstName" name="firstName" placeholder="firstName" value={form.firstName} onChange={updateForm} />
        </label>
        <label>
          <input type="text" id="secondName" name="secondName" placeholder="secondName" value={form.secondName} onChange={updateForm} />
        </label>
        <label>
          <input type="password" id="password" name="password" placeholder="password" value={form.password} onChange={updateForm} />
        </label>
        <button>Submit!</button>
      </form>
      {submitted &&
        <ul>
          {Object.entries(form).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
        </ul>}
    </div>
  );
}

export default App;
