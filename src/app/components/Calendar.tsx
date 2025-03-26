"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month view plugin
import timeGridPlugin from "@fullcalendar/timegrid"; // Time-based view plugin

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="timeGridWeek" // Use time-based week view
      weekends={true} // Show weekends
      events={[
        { title: "Meeting", start: "2025-03-25T10:00:00", end: "2025-03-25T11:00:00" },
        { title: "Workshop", start: "2025-03-26T14:00:00", end: "2025-03-26T16:00:00" },
      ]}
    />
  );
}