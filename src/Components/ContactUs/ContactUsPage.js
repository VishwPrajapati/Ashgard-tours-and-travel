import React from "react";
import ContactUsBanner from "./ContactUsBanner";
import "../../Components/ContactUs/ContactUs.css";
import ContactUsContent from "./ContactUsContent";
import ContactUsForm from "./ContactUsForm";
import ConnectWithUs from "./ConnectWithUs";

export default function ContactUsPage() {
  return (
    <>
      <ContactUsBanner />
      <ContactUsContent />
      <ConnectWithUs />
      <ContactUsForm />
    </>
  );
}
