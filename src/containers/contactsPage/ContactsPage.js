import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contact, handleAddContact }) => {
  /* Define state variables for contact info and duplicate check */

  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [nameExist, setNameExist] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameExist === true) return;
    /* Add contact info and clear data if the contact name is not a duplicate  */
    handleAddContact(contactData);
    setContactData({
      name: "",
      phone: "",
      email: "",
    });
  };

  /* Using hooks, check for contact name in the  contacts array variable in props */
  useEffect(() => {
    setNameExist(false);
    // eslint-disable-next-line array-callback-return
    contact.map((item) => {
      if (item.name === contactData.name) {
        setNameExist(true);
      }
    });
  }, [contact, contactData.name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          contactData={contactData}
          setContactData={setContactData}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contact} />
      </section>
    </div>
  );
};
