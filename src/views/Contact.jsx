import React, { useEffect } from 'react';
import PageHeader from "components/PageHeader";
import Contacts from "res/state/Contacts";

const ContactLink = ({ name, icon: Icon, link }) => {
  let renderedIcon = "";
  if (typeof (Icon) === "function") {
    renderedIcon = <Icon fill="currentColor" className="aspect-square h-[2em]" />;
  } else if (typeof (Icon) === "string") {
    renderedIcon = <img className="aspect-square h-[2em]" src={Icon} />;
  }

  return (
    <div className="flex gap-2 items-center justify-center flex-wrap">
      {renderedIcon}
      <a className="link" href={link}>{name}</a>
    </div>
  );
};

const Contact = () => {
  useEffect(() => {
    document.title = "Rik den Breejen | Contact";
  }, []);

  return (
    <>
      <PageHeader className="mt-auto">
        <p>{`< Contact />`}</p>
        <div className="text-[2rem]">You can find me on</div>
      </PageHeader>
      <section className="w-5/6 sm:w-2/3 pb-32 sm:pb-24 mb-auto">
        <nav
          aria-label="External contact links"
          className="flex gap-4 md:gap-6 xl:gap-8 2xl:gap-10 wide:gap-12 justify-center flex-wrap children:w-full sm:children:w-auto"
        >
          {Contacts.map((contact, i) => <ContactLink
            key={i}
            name={contact.name}
            icon={contact.icon}
            link={contact.link}
          />)}
        </nav>
      </section>
    </>
  );
};

export default Contact;
