import React from 'react';
import TimelineState from "res/state/Timeline";
import PageHeader from "components/PageHeader";
import TimelineItem from "components/TimelineItem";
import Head from 'next/head';

const Timeline = () => {

  return (
    <>
      <Head>
        <title>Rik den Breejen | Timeline</title>
      </Head>
      <PageHeader className="mt-8">
        <p>&lt; Timeline /&gt;</p>
        <div className="w-2/3 text-center text-[1.25rem] md:text-[2rem] mb-4">
          This is a timeline of my experience with software engineering and development.
        </div>
      </PageHeader>
      <section aria-label="Timeline" className="w-4/5 max-w-7xl flex flex-col justify-center pb-32 sm:pb-20">
        {TimelineState.map((point, i) => {
          return <TimelineItem
            key={i}
            title={point.title}
            company={point.company}
            companyLink={point.companyLink}
            location={point.location}
            description={point.description}
            onLeft={i % 2 == 1}

            periodName={point.periodName}
            startDate={point.startDate}
            endDate={point.endDate}
          />;
        })}
        <div className="flex mb-[40vh]">
          <div className="w-1/4 sm:hidden"></div>
          <div className="w-full text-grayed transition-colors sm:text-center">To be continued...</div>
        </div>
      </section>
    </>
  );
};

export default Timeline;