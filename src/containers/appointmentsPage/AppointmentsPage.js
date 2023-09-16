import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointment,
  handleAddAppointment,
  contact,
}) => {
  /*Define state variables for appointment info */
  const [contactName, setContactName] = useState("");
  const [appointmentData, setAppointmentData] = useState({
    name: "",
    date: "",
    time: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Add contact info and clear data */
    handleAddAppointment(appointmentData);
    setAppointmentData({
      name: "",
      date: "",
      time: "",
      contact: "",
    });
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          appointmentData={appointmentData}
          setAppointmentData={setAppointmentData}
          contact={contact}
          setContactName={setContactName}
          contactName={contactName}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointment} />
      </section>
    </div>
  );
};
