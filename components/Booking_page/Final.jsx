
import { Canceldetail } from "./Canceldetail";
import { Flightdetail } from "./Flightdetail";
import { Flightdetailfooter } from "./Flightdetailfooter";
import { Luggagebar } from "./Luggagebar";

export const Final = () => {
  return (
    <div className="final">
      <div className="detail">
        <Flightdetail />
        <Luggagebar />
        <Canceldetail />
        <Flightdetailfooter />
      </div>
      <div className="pay_detail">
        
      </div>
    </div>
  );
};