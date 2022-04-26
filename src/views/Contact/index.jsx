import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";

const Contact = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Contact";
  }, []);

  return (
    <>
      <PageHeader>
        <p>Contact</p>
      </PageHeader>
    </>
  );
};

export default Contact;