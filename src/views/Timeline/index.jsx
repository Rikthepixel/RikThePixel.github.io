import React, { useEffect } from 'react';
import TimelineState from "res/state/Timeline";
import PageHeader from "components/PageHeader";
import TimelineItem from "../../components/TimelineItem";


const Timeline = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Timeline";
  }, []);

  return (
    <>
      <PageHeader className="sm:mt-0">
        <p>Timeline</p>
        <div className="w-2/3 text-center text-[2rem] mb-4">
          This is a timeline of my experience with software engineering and development.
        </div>
      </PageHeader>
      <section aria-label="Timeline" className="pb-32 sm:pb-20">
        {TimelineState.map((point, i) => {
          return <TimelineItem
            key={i}
            title={point.title}
            company={point.company}
            location={point.location}
            description={point.description}

            startDate={point.startDate}
            endDate={point.endDate}
          />;
        })}
      </section>
    </>
  );
};

export default Timeline;