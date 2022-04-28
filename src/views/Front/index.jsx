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
      <PageHeader className="pb-0 mt-auto sm:mt-0">
        <div>
          <p className="text-[5vmin]">Hello!</p>
          <p>I'm Rik!</p>
        </div>
        <div className="hero-action move-down font-extrabold text-[10vmin] hidden sm:block" aria-label="Go down">↓</div>
      </PageHeader>
      <div className="w-2/3 gap-4 mb-auto flex justify-center flex-wrap children:w-full children:flex children:justify-center children:items-center pb-32 sm:pb-24 sm:flex-nowrap sm:children:w-auto md:gap-8">
        <div className="">
          <img className="w-full h-fit aspect-square object-cover rounded-full max-w-[10rem] sm:max-w-[15rem]" src={AboutMePhoto} />
        </div>
        <div className="hero-short">
          Hello, this website is still work in progress! <br />
          Stay tuned!
        </div>
        <div className="hero-long">
          Hello, this website is still work in progress! <br />
          Stay tuned!
        </div>
      </div>
    </>
  );
};

export default Front;