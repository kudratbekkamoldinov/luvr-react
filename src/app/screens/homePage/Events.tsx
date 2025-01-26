import React from "react";
import { Box, Container, Stack } from "@mui/material";


import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveEvents } from "./selector";
import { serverApi } from "../../../libs/config";

const eventsRetriever = createSelector(retrieveEvents, (events) => ({
  events,
}));

export default function Events() {
  const { events } = useSelector(eventsRetriever);
  return (
    <div className="event-frame">
      <Container>
        <Stack className="event-section">
          <Stack className="event-title">Latest & Gratest</Stack>
          <Stack className="event-blog">
          {events.length !== 0 ? (
                events.map((event: Event) => {
                  const imagePath = `${serverApi}/${event.eventImage}`;
              return (
                <Stack key={event._id} className="blog">
                  <Stack className="blog-image">
                    <img src={imagePath} alt="" className="image" />
                    <Stack className="blog-text">
                      <strong className="blog-strong">
                        {event.eventName}
                      </strong>
                      <span className="blog-date">January 21 , 2025</span>
                      <span className="blog-description">
                        One may not need charts and graphs at this point to know
                        that, in the past couple of years especially, the buying
                        and selling o...
                      </span>
                      <span className="read-more">Read More</span>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })
          ) : (
            <Box className="no-data">Events are not avaiable!</Box>
          )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
