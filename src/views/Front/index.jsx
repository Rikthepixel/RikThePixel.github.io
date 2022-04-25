import { useEffect } from 'preact/hooks';
import AboutMePhoto from "res/images/Placeholder.webp";
import "./Front.scss";

const Front = () => {
  useEffect(() => {
    document.title = "Rik den Breejen";
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center relative">
        <div>
          <div className="text-[5vmin]">Hello!</div>
          <div className="text-[20vmin]">I'm Rik!</div>
        </div>
        <div className="hero-action move-down font-extrabold text-[10vmin]">↓</div>
      </div>
      <div className="w-2/3 grid grid-cols-2 gap-4">
        <div className="w-full aspect-square"><img className="aspect-square h-full object-cover rounded-md" src={AboutMePhoto} /></div>
        <div className="text-center">
          Hallow, have a look at my projects!
        </div>
      </div>
    </>
  );
};

export default Front;