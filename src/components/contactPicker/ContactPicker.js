import React from "react";

export const ContactPicker = ({ contact, appointmentData, onChange }) => {
  return (
    <select name="contact" value={appointmentData.time} onChange={onChange}>
      <option></option>
      {contact.map((item) => {
        return <option value={item.name}>{item.name}</option>;
      })}
    </select>
  );
};
