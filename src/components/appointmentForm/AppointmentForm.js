import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  appointmentData,
  setAppointmentData,
  contact,
  handleSubmit,
}) => {
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAppointmentData((prevState) => {
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
            value={appointmentData.name}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Date:
          <input
            type="date"
            name="date"
            min={getTodayString()}
            onChange={handleChange}
            value={appointmentData.date}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Time:
          <input
            type="time"
            name="time"
            onChange={handleChange}
            value={appointmentData.time}
          />
        </label>
      </div>
      <ContactPicker
        contact={contact}
        appointmentData={appointmentData}
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};
