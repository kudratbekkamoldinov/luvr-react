import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveEvents } from "./selector";

const eventsRetrieve = createSelector(retrieveEvents, (events) => ({
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
            {list.map((ele, index) => {
              return (
                <Stack key={index} className="blog">
                  <Stack className="blog-image">
                    <img src={ele.imagePath} alt="" className="image" />
                    <Stack className="blog-text">
                      <strong className="blog-strong">
                        {ele.eventName}
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
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
