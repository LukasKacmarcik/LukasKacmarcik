import { useState } from "react";

function App() {

  const [form, setForm] = useState({
    base: "thin",
    chees: "",
    ham: "",
    bacon: "",
    cut: "yes"
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(ps => {
      return {
        ...ps,
        [name]: type === "checkbox" ? checked : value
      }
    })
  };

  function submit(e) {
    e.preventDefault();
    alert(`${Object.entries(form)
      .filter(([key, val]) => val !== "" && val !== false && val !== "no")
      .map(([key, val]) => `${key} ${key === "base" ? `: ${val}` : ""} `)}`)
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="base">Base</label>
      <select id="base" name="base" value={form.base} onChange={handleChange}>
        <option value="thin" >Thin</option>
        <option value="medium" >Medium</option>
        <option value="thick" >Thick</option>
      </select><br /><br />
      <label htmlFor="chees">Chees</label>
      <input type="checkbox" name="chees" id="chees" checked={form.chees} onChange={handleChange}></input><br />
      <label htmlFor="ham">Ham</label>
      <input type="checkbox" name="ham" id="ham" checked={form.ham} onChange={handleChange}></input><br />
      <label htmlFor="bacon">Bacon</label>
      <input type="checkbox" name="bacon" id="bacon" checked={form.bacon} onChange={handleChange}></input><br /><br />
      <label htmlFor="yes">Yes</label>
      <input type="radio" name="cut" id="yes" value="yes" checked={form.cut === "yes"} onChange={handleChange}></input><br />
      <label htmlFor="no">No</label>
      <input type="radio" name="cut" id="no" value="no" checked={form.cut === "no"} onChange={handleChange}></input><br /><br />
      <button>Create Pizza</button>
    </form>
  )
};

export default App;
