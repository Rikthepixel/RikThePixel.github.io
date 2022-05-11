import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";

const Timeline = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Timeline";
  }, []);

  return (
    <>
      <PageHeader className="mb-auto">
        <p>Coming Soon</p>
      </PageHeader>
    </>
  );
};

export default Timeline;