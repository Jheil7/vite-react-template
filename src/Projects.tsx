import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Tabs, Tab, Button, Card, CardContent, CardMedia } from "@mui/material";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const projects = [
  {
    title: "Gamucatex",
    image: "public/images/Tectonicus.png",
    description: "Start up company where I worked on Tectonicus",
    linkURL: "https://gamucatex.itch.io/tectonicus",
  },

  {
    title: "Extinguished",
    video: "public/videos/ExtinguishedMP4.mp4",
    description:
      "A 2D platformer made in a 2-week game jam. Navigate puzzles and avoid hazards!",
    linkURL: "https://jmhe222.itch.io/extinguished",
  },

  {
    title: "Sprout",
    video: "public/videos/SproutMP4.mp4",
    description: "A 2D puzzle/platformer made in a 10 day game jam.",
    linkURL: "https://jmhe222.itch.io/sprout",
  },

  {
    title: "Block Bouncer",
    image: "public/images/Block1.png",
    description: "Local multiplayer battler",
    linkURL: "https://jmhe222.itch.io/block-bouncer",
  },
  {
    title: "Tower Defense Prototype",
    description:
      "A prototype for a survival/tower defense game. Strategize to hold off waves of enemies!",
    video: "public/videos/SurvivalTDMP4.mp4",
    linkURL: "https://jmhe222.itch.io/survival-tower-defense",
  },
  {
    title: "Shape Shooter",
    video: "public/videos/GrowthJamClipMP4.mp4",
    description: "Puzzle shooter/aim trainer for first game jam",
    linkURL: "https://jmhe222.itch.io/shape-shooter",
  },
];

export default function ProjectsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <Container maxWidth="xl">
      <Stack
        sx={{ marginTop: "64px", textAlign: "center" }}
        spacing={"16px"}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Box>
          <Typography variant="h1" component="h1">
            About me:
          </Typography>
          <Typography>
            About me info: Things about Joey copyThings about Joey copy
            pastaThings about Joey copy pasta Things about Joey copy pastaThings
            about Joey copy pastaThings about Joey copy pastaThings about Joey
            copy pasta Things about Joey copy pastaThings about Joey copy
            pastaThings about Joey copy pastaThings about Joey copy pastaThings
            about Joey copy pasta Things about Joey copy pastaThings about Joey
            copy pastaThings about Joey copy pastaThings about Joey copy pasta
            Things about Joey copy pasta Things about Joey copy pasta Things
            about Joey copy pasta Things about Joey copy pasta Things about Joey
            copy pasta Things about Joey copy pasta
          </Typography>
          <Typography>
            Skills Section: Skills that Joey most definitely has.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h1" component="h1">
            Projects
          </Typography>
          <Box>
            {/* Tabs Navigation */}
            <Tabs
              value={selectedTab}
              onChange={(_, newValue) => setSelectedTab(newValue)}
              centered
            >
              {projects.map((project, index) => (
                <Tab key={index} label={project.title} sx={{ fontSize: 20 }} />
              ))}
            </Tabs>
          </Box>

          {/* Project Content */}
          <Box sx={{ mt: 3 }}>
            {/* GIF Preview */}
            {/* <img
              src={projects[selectedTab].gif}
              alt={projects[selectedTab].title}
              style={{ width: "100%", maxWidth: "900px", borderRadius: "8px" }}
            /> */}
            {projects[selectedTab].video ? (
              <video
                src={projects[selectedTab].video}
                controls
                playsInline
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  borderRadius: "8px",
                }}
              />
            ) : (
              <img
                src={projects[selectedTab].image}
                alt={projects[selectedTab].title}
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  borderRadius: "8px",
                }}
              />
            )}

            {/* Project Description */}
            <Typography variant="h5" sx={{ mt: 2 }}>
              {projects[selectedTab].title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {projects[selectedTab].description}
            </Typography>

            {/* Itch.io Link Button */}
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
              href={projects[selectedTab].linkURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Itch.io
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
