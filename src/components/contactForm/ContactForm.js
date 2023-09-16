import React from "react";

export const ContactForm = ({ contactData, setContactData, handleSubmit }) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContactData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={contactData.name}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={contactData.email}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Phone:
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            value={contactData.phone}
          />
        </label>
      </div>
      <input type="submit" />
    </form>
  );
};
