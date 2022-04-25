import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Contact";
  }, []);

  return (
    <main className="p-4 flex-1">
      Contact
    </main>
  );
};

export default Contact;