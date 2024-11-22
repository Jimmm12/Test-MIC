import Infornew from "./content/eventMIC/Infornew";
import Event from "./content/eventMIC/Event";
const EventMIC = () => {
  return (
    <div className="flex justify-center items-center mb-10">
      <div className="flex ">
        <Event />
        <Infornew />
      </div>
    </div>
  );
};

export default EventMIC;
