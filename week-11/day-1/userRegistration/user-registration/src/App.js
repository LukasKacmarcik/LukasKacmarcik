import { useState, useEffect } from "react";
import validation from "./validation";

function App() {

  const [form, setForm] = useState({
    username: "",
    emailAddress: "",
    password: ""
  })

  const [valid, setValid] = useState(false);

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

  useEffect(() => {
    (validation(form)) ? setValid(true) : setValid(false);
  }, [form])

  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="App">
      <form onSubmit={submit}>
        <label>
          <input type="text" id="username" name="username" placeholder="username" value={form.username} onChange={updateForm} />
        </label>
        <label>
          <input type="email" id="emailAddress" name="emailAddress" placeholder="emailAddress" value={form.emailAddress} onChange={updateForm} />
        </label>
        <label>
          <input type="password" id="password" name="password" placeholder="password" value={form.password} onChange={updateForm} />
        </label>
        <button disabled={!valid}>Submit!</button>
      </form>
      {submitted &&
        <ul>
          {Object.entries(form).map(([key, value]) => <li key={key}>{key}: {value}</li>)}
        </ul>}
    </div>
  );
}

export default App;