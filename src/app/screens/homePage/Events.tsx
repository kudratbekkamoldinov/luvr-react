import { Container, Stack } from "@mui/material";
import React from "react";

const list = [
  {
    eventName: "The best summer fashion for everyone",
    imagePath: "/img/chg.jpg",
  },
  {
    eventName: "Best deals of this spring season",
    imagePath: "/img/chanelparis.jpg",
  },
  { eventName: "Check out the Top Rated Products", imagePath: "/img/vl1.jpg" },
];

export default function Events() {
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
