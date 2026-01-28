import React from "react";
import PageHeader from "./PageHeader";
import ContactInfo from "./ContactInfo";
import BookNow from "./BookNow";
import MapSection from "./MapSection";

function Contact() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <PageHeader />

      {/* ===== CONTACT INFO + FORM ===== */}
      <ContactInfo />

      {/* ===== BOOK NOW SECTION ===== */}
      <BookNow />

      {/* ===== MAP SECTION ===== */}
      <MapSection />
    </>
  );
}

export default Contact;
