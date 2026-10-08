"use client";

import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { bn } from "date-fns/locale";

export default function DateTime() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const currentDate = formatInTimeZone(
        new Date(),
        "Asia/Dhaka",
        "EEEE, d MMMM yyyy",
        {
          locale: bn,
        }
      );

      setDate(currentDate);
    };

    updateDate();

    const interval = setInterval(updateDate, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return <span>{date || "Loading..."}</span>;
}