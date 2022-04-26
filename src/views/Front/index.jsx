import { useEffect } from 'preact/hooks';
import AboutMePhoto from "res/images/Placeholder.webp";
import PageHeader from "components/PageHeader";
import "./Front.scss";

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <>
      <PageHeader className="min-h-[auto]  sm:min-h-screen mt-12 mb-auto sm:my-0">
        <div>
          <p className="text-[5vmin]">Hello!</p>
          <p>I'm Rik!</p>
        </div>
        <div className="hero-action move-down font-extrabold text-[10vmin] hidden sm:block" aria-label="Go down">↓</div>
      </PageHeader>
      <div className="w-2/3 grid grid-col-1 sm:grid-cols-2 gap-4 mb-auto sm:mb-0">
        <div className="flex justify-center sm:justify-end">
          <img className="aspect-square object-cover rounded-md w-full sm:w-4/5 lg:w-1/2 max-h-[50vh] md:max-h-[80vh]" src={AboutMePhoto} />
        </div>
        <div className="flex justify-center items-center sm:justify-start">
          <div className="text-center">
            Hallow, have a look at my projects!
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;