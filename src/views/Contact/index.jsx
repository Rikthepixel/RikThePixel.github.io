import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";

const Contact = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Contact";
  }, []);

  return (
    <>
      <PageHeader>
        <p>Coming Soon</p>
      </PageHeader>
    </>
  );
};

export default Contact;