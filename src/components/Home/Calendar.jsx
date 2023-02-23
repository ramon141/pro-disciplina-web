import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import esLocale from "@fullcalendar/core/locales/pt-br";
import styled from "@emotion/styled";

export const StyleWrapper = styled.div`
  .fc-direction-ltr,
  .fc-button,
  .fc-button-group {
    border-color: #383838;
    background-color: #383838;
    color: white;
  }

  .fc {
    border-radius: 20px;
  }

  .fc-prev-button {
    border-radius: 20px 0 0 0;
  }

  .fc-next-button {
    border-radius: 0 20px 0 0;
  }

  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    min-height: 0px;
    position: relative;
  }

  .fc-scrollgrid-sync-table tbody tr {
    height: 20px;
  }

  .fc-daygrid-body table {
    height: 220px !important;
  }

  .fc-view-harness {
    height: 251px !important;
  }

  .fc-toolbar-title {
    font-size: 1.2em;
  }
`;

export default function Calendar() {
  return (
    <StyleWrapper>
      <FullCalendar
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        locale={esLocale}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </StyleWrapper>
  );
}
