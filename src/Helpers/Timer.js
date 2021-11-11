import { useEffect, useRef, useState } from "react";
const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDate = new Date("November 12, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const gap = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);

      if (gap < 0) {
        //   stop our timer
        clearInterval(interval.current);
      } else {
        //   update timerSecond
        setTimerDays(textDay);
        setTimerHours(textHour);
        setTimerMinutes(textMinute);
        setTimerSeconds(textSecond);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return { timerDays, timerHours, timerMinutes, timerSeconds };
};

export default Countdown;
