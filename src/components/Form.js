import React, { useState } from "react";

function Form() {
  // Commented out since this is refactored later:
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    // Use 'checked' property of checkboxes instead of value:
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // These two callback functions have been refactored so that we can utilize a single 'useState' function call:
  // NOTE: These are commented out since I refactored these into a single function:
  /* function handleFirstNameChange(event) {
  *   setFormData({
  *     ...formData,
  *     firstName: event.target.value,
  *   });
  * }

  * function handleLastNameChange(event) {
  *   setFormData({
  *     ...formData,
  *     lastName: event.target.value,
  *   });
    * } */

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        value={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
