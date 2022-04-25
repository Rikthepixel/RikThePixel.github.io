import React, { useEffect } from 'react';

const Timeline = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Timeline";
  }, []);

  return (
    <main className="p-4 flex-1">
      Timeline
    </main>
  );
};

export default Timeline;