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
      <PageHeader className="min-h-[unset] sm:min-h-screen mt-12 mb-auto sm:my-0">
        <div>
          <p className="text-[5vmin]">Hello!</p>
          <p>I'm Rik!</p>
        </div>
        <div className="hero-action move-down font-extrabold text-[10vmin] hidden sm:block" aria-label="Go down">↓</div>
      </PageHeader>
      <div className="w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:w-full children:flex children:justify-center children:items-center sm:mb-20 sm:flex-nowrap sm:children:w-auto md:gap-8">
        <div className="">
          <img className="w-full h-fit aspect-square object-cover rounded-full max-w-[15rem]" src={AboutMePhoto} />
        </div>
        <div className="text-center p-4">
          Hello, have a look at my projects!
        </div>
      </div>
    </>
  );
};

export default Front;