import React from "react";
import "../../../css/about.css";

import { Box, Container, Stack } from "@mui/material";
import Facilities from "../../components/common/Facilities";

export function AboutPage() {
  return (
    <div className="about-page">
      <Container style={{ height: "auto" }}>
        <Stack className="about-frame">
          <Stack className="avatar-big-box">
            <Stack className="product-title" sx={{ pr: "132" }}>
              <Box>About Us</Box>
            </Stack>
          </Stack>
          <Stack className="about-vid">
            <video
              className="ads-video"
              autoPlay={true}
              loop
              muted
              playsInline
              data-video-media=""
            >
              <source type="video/mp4" src="video/about.mp4" />
            </video>
          </Stack>
          <Stack>
            <Facilities />
          </Stack>
          <Stack className="experience">
            <Stack className="about-title">Experience</Stack>
            <Stack className="about-text">
              <Stack className="business">
                <strong>Perfect powerful theme for corporate business</strong>
                <span>
                  It is accompanied by a case that can contain up to three
                  different diffusers and can be used for dry storage of loose
                  tea. The perfect way to enjoy brewing tea on low hanging fruit
                  to identify. Lighting is a minimal residence located in Tokyo,
                  Japan, designed by Spozy. Large tiles were arranged on the
                  counter top plate near the window of the living room, they
                  were connected to the kitchen counter through the opening in
                  the existing building wall.
                </span>
                <span>
                  It is accompanied by a case that can contain up to three
                  different diffusers and can be used for dry storage of loose
                  tea. The perfect way to enjoy brewing tea on low hanging fruit
                  to identify. Lighting is a minimal residence located in Tokyo,
                  Japan, designed by Spozy.
                </span>
              </Stack>
              <Stack className="mission">
                <strong>Our Mission</strong>
                <span>
                  It is accompanied by a case that can contain up to three
                  different diffusers and can be used for dry storage of loose
                  tea. The perfect way to enjoy brewing tea on low hanging fruit
                  to identify.
                </span>
                <strong>Our Vision</strong>
                <span>
                  It is accompanied by a case that can contain up to three
                  different diffusers and can be used for dry storage of loose
                  tea. The perfect way to enjoy brewing tea on low hanging fruit
                  to identify. Lighting is a minimal residence located in Tokyo,
                  Japan, designed by Spozy.
                </span>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
