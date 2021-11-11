import { useState } from "react";
import Countdown from "../../Helpers/Timer";
import './Banner.css'

const Banner = () => {
  const [show, setShow] = useState(true);
  // const { startTimer } = Countdown();
  // console.log(Countdown)
  const { timerHours, timerMinutes, timerSeconds } = Countdown();

  return show ? (
    <div
      className="alert alert-warning alert-dismissible fade show text-center my__Banner"
      role="alert"
    >
      <strong> One-Day Sale </strong>| New skills last a lifetime. Courses start
      at just $11.99. <br />
      <strong>
        Ends in {timerHours}h {timerMinutes}m {timerSeconds}s.
      </strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  ) : (
    ""
  );
};

export default Banner;
