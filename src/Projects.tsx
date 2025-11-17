import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Tabs, Tab, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import StorageIcon from "@mui/icons-material/Storage";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from "@mui/icons-material/Groups";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

type Project = {
  title: string;
  description: string;
  image?: string;
  linkURL: string;
  altdescription?: string;
  video?: string; // optional
};

const gameDevProjects: Project[] = [
  {
    title: "Tectonicus",
    image: "/images/Tectonicus.png",
    altdescription:
      "Promotional artwork for Tectonicus, a historically accurate narrative card game with illustrated cards and a fantasy-inspired UI.",
    description:
      "A historically accurate narrative card game developed at the indie startup Gamucatex. I contributed to the first iteration of the game’s story mode, created a new save system using JSON (replacing PlayerPrefs), revamped the deckbuilder UI, added card back selection in the store, and transitioned the entire game from a 2D scene to 3D, updating all UI accordingly. I also learned FMOD to add new audio to the game, improved card animations with DOTween, and fixed numerous bugs. Working in a small, fluctuating team of 3–8 developers, I frequently dealt with legacy code and removed dependencies to implement new features cleanly. The game was built in Unity with input from a dedicated team of historians crafting authentic lore and card descriptions.",
    linkURL: "https://gamucatex.itch.io/tectonicus",
  },

  {
    title: "Extinguished",
    video: "/videos/ExtinguishedMP4.mp4",
    description:
      "A 2D platformer created in a two-week game jam for the theme “Horror,” placing 34th out of 496 entries. Developed with one other team member who handled animations and art, while I focused on player movement, interactions, and level design. My contributions included implementing Unity’s Tilemap system for level creation, adding parallax background movement to enhance depth, and integrating audio assets into the game. I also designed a dynamic lighting mechanic where the player carries an orb of light that gradually shrinks as a meter depletes, leaving most of the map in darkness. The meter refills at checkpoints, creating natural tension and pacing throughout each level. I also learned Unity animation events to better synchronize hazard timing and player feedback.One of the most valuable lessons came from post-jam feedback on hazard hitboxes. I studied Celeste and learned how many platformers subtly favor the player, allowing for “cheated” close calls that feel satisfying and memorable. I applied this by adjusting hitboxes to make hazards more forgiving while keeping the challenge intact.",
    linkURL: "https://jmhe222.itch.io/extinguished",
  },

  {
    title: "Sprout",
    video: "/videos/SproutMP4.mp4",
    description:
      "A 2D puzzle-platformer created in a 10-day game jam, placing 77th out of 1,026 entries. The game begins in a tiny underground village and transitions to a large, normal-sized world where the player can shift between small and normal forms. This size-shifting mechanic drives both traversal and puzzle-solving, allowing players to access new paths, manipulate objects, and interact with the world in different ways. I programmed the core size-shifting system, implemented puzzles that required creative form changes, and built platforming challenges using Unity’s Tilemap system. I also created the sequence that transitions the player from underground to above ground, including camera work, animations, and environmental interactions. The project was developed entirely with free assets, collaborating with a 2D artist and an audio designer. My focus was on integrating their work into the gameplay seamlessly while keeping scope manageable for the jam deadline.",
    linkURL: "https://jmhe222.itch.io/sprout",
  },

  {
    title: "Block Bouncer",
    image: "/images/Block1.png",
    altdescription:
      "Screenshot of the title screen from Block Bouncer, a local multiplayer battler where players destroy and replace blocks to knock each other off platforms.",
    description:
      "A local multiplayer battler inspired by couch co-op favorites like Duck Game, Gang Beasts, and Super Smash Bros. The objective is to knock your opponent off their platform using two primary methods: slamming one of your own blocks (which removes the corresponding block on your opponent’s side), or pelting them with rubble. Rubble is earned by breaking your own blocks and can be fired repeatedly to build up knockback, similar to the damage/launch system in Super Smash Bros. Blocks aren’t gone forever as you can shoot a block back down to replace it, creating opportunities to recover space, bait your opponent, or force mistakes. I developed all core gameplay systems in Unity, including player movement, block destruction/replacement, rubble spawning, hit accumulation, and knockback physics. The game was designed for fast, chaotic matches that reward both aggressive play and clever block management. I plan to expand the game with an online lobby system in the future to allow remote multiplayer without matchmaking.",
    linkURL: "https://jmhe222.itch.io/block-bouncer",
  },
  {
    title: "Tower Defense Prototype",
    description:
      "An early gameplay experiment combining third-person combat with turret-based defense. Built in Unity as a proof of concept for blending action mechanics with traditional tower defense elements. The player controls a third-person character who can move, swing a weapon, and place turrets on a grid around a central base. Exploring the map leads to a cave full of bats that can be fought directly, and entering the cave starts a timer until a wave of bats attacks the base. Turrets can be placed to automatically attack enemies, and the enemy pathfinding updates dynamically as new obstacles are placed. One of the main challenges was working with the Grid Builder 2 asset. I collaborated with the asset’s developer to resolve a bug where turrets were active during the placement preview instead of only after being placed. This fix was incorporated into an official update of the tool. While the prototype has no full gameplay loop or resource system yet, it serves as a foundation for potential future development with expanded enemy types, wave mechanics, and player progression.",
    video: "/videos/SurvivalTDMP4.mp4",
    linkURL: "https://jmhe222.itch.io/survival-tower-defense",
  },
  {
    title: "Shape Shooter",
    video: "/videos/GrowthJamClipMP4.mp4",
    description:
      "My first ever game jam entry, created in Unity for a small community jam. Since I was unfamiliar with how jams worked, the game wasn’t rated by anyone, but it served as a valuable learning experience in both scope management and core mechanic implementation. The premise is to shoot balls whose color is determined by their size, based on an array of static size–color pairs. Left click fires a “grow” bullet and right click fires a “shrink” bullet, changing both the ball’s size and its color. The goal is to fit the ball through appropriately sized hoops along a course until it reaches the finish line. The finish line also has a color requirement, so players must reach it with the correct combination of size and color. One of the biggest lessons I learned was the importance of using raycasts for shooters instead of relying on Unity’s physics system for bullets. At high speeds, physics-based projectiles were unreliable and sometimes failed to register hits, so I discovered how ray-based detection can solve that issue.",
    linkURL: "https://jmhe222.itch.io/shape-shooter",
  },
];

const webDevProjects: Project[] = [
  {
    title: "This Portfolio",
    description: `Tech: React, TypeScript, Material UI, Railway

    Highlights:
        • Designed a clean multi-section layout featuring a skills overview, game dev projects, and web dev projects
        • Implemented nested tab navigation with dynamic content switching based on the selected category
        • Built reusable UI components using the MUI Box, Grid, Card, and Tabs systems
        • Added a persistent AppBar with resume download support and contextual page navigation
        • Created a footer with external links to GitHub, LinkedIn, and Itch.io
        • Deployed to Vercel with production bundling and automatic redeployment on push

        Focus Areas: component composition, state-driven UI, responsive layout, custom MUI theming`,
    //image: "/images/PortfolioImage.png",
    linkURL: "https://joeyheil.up.railway.app/",
  },
  {
    title: "Pizza Menu",
    description: `
    Tech: React, JavaScript, CSS, Vercel

    Highlights:
    • Built a reusable Pizza component used to render images, ingredients, and pricing
    • Implemented conditional rendering to gray out pizzas and label them “Sold Out” when out of stock
    • Added a dynamic footer that shows whether the restaurant is currently open based on real-time hours
    • Practiced component mapping, props-driven UI, and basic styling
    • Designed a purposefully small but functional app demonstrating component structure and flow

    Focus Areas: conditional rendering, component mapping, UI state design
    `,
    image: "/images/PizzaMenu.png",
    linkURL: "https://pizza-menu-joeyh.vercel.app/",
  },
  {
    title: "Roster App",
    description: `
    Tech: React, JavaScript, CSS, Vercel

    Highlights:
    • Created an input-driven system for adding new players with automatic list rendering
    • Implemented a dynamic counter that shows the total roster size and how many players have paid
    • Added toggles and sorting options: alphabetical order, payment status, or original entry order
    • Built a clean UI allowing users to remove individual players or fully reset the roster
    • Developed reusable components for list items, checkboxes, and sorting controls

    Focus Areas: state management, controlled inputs, sorting/filter logic, interactive UI design
    `,
    image: "/images/RosterImage.png",
    linkURL: "https://soccer-roster-joeyh.vercel.app/",
  },
];

const gameDevTech = [
  { name: "Unity", icon: <SportsEsportsIcon fontSize="large" /> },
  { name: "Unreal Engine", icon: <CodeIcon fontSize="large" /> },
  { name: "C# / C++", icon: <DataObjectIcon fontSize="large" /> },
  { name: "ScriptableObjects", icon: <StorageIcon fontSize="large" /> },
  { name: "Shader Graph", icon: <WebIcon fontSize="large" /> },
  { name: "UI Toolkit / uGUI", icon: <ViewKanbanIcon fontSize="large" /> },
];

const webDevTech = [
  { name: "JavaScript", icon: <JavascriptIcon fontSize="large" /> },
  { name: "React", icon: <CodeIcon fontSize="large" /> },
  { name: "Node.js", icon: <StorageIcon fontSize="large" /> },
  { name: "Next.js", icon: <WebIcon fontSize="large" /> },
  { name: "HTML", icon: <HtmlIcon fontSize="large" /> },
  { name: "CSS", icon: <CssIcon fontSize="large" /> },
];

const toolsTech = [
  { name: "Git / GitHub", icon: <GitHubIcon fontSize="large" /> },
  { name: "Itch.io", icon: <WebIcon fontSize="large" /> },
  { name: "Game Jams", icon: <SportsEsportsIcon fontSize="large" /> },
  { name: "Trello", icon: <ViewKanbanIcon fontSize="large" /> },
  { name: "Jira", icon: <AssignmentTurnedInIcon fontSize="large" /> },
  { name: "AI", icon: <GroupsIcon fontSize="large" /> },
];

export default function ProjectsTabs() {
  const [selectedMainTab, setSelectedMainTab] = useState(0);
  const [selectedGameDevTab, setGameDevSelectedTab] = useState(0);
  const [selectedWebDevTab, setWebDevSelectedTab] = useState(0);
  const activeProjects =
    selectedMainTab === 0 ? gameDevProjects : webDevProjects;
  const activeTabIndex =
    selectedMainTab === 0 ? selectedGameDevTab : selectedWebDevTab;

  return (
    <Container maxWidth="xl">
      <Stack
        sx={{ marginTop: "64px", textAlign: "center" }}
        spacing={"16px"}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Box>
          <Typography variant="h2" component="h2">
            About me
          </Typography>
          <Typography className="faded-panel">
            I’m a Unity and software developer with a strong focus on gameplay
            programming, UI systems, and creating smooth, engaging user
            experiences. Over the past few years, I’ve worked on projects
            ranging from narrative card games and web development (including
            this site) to platformers built during game jams, all while learning
            to deliver clean, maintainable code under tight deadlines. I enjoy
            solving problems through code and seeing those solutions come to
            life as playable mechanics or polished interfaces. Outside of
            development, I enjoy staying active and connecting with friends
            through games and sports.
          </Typography>
        </Box>
        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h2" component="h2">
            Skills
          </Typography>

          <Box
            className="faded-panel"
            maxWidth={900}
            sx={{ display: "inline-block" }}
          >
            <Grid mt={1} container spacing={4} justifyContent="center">
              {/* Game Dev column */}
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2, fontWeight: 600, justifyContent: "center" }}
                >
                  Game Development
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {gameDevTech.map((tech) => (
                    <Grid item key={tech.name}>
                      <Box
                        sx={{
                          width: 110,
                          height: 110,
                          borderRadius: 3,
                          backgroundColor: "rgba(255,255,255,0.85)",
                          border: "1px solid rgba(0,0,0,0.1)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "0.2s",
                          boxShadow: 1,
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: 3,
                            backgroundColor: "rgba(255,255,255,0.95)",
                          },
                        }}
                      >
                        {tech.icon}
                        <Typography sx={{ mt: 1, fontSize: 14 }}>
                          {tech.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {/* Web Dev column */}
              <Grid xs={12} md={12}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Web Development
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {webDevTech.map((tech) => (
                    <Grid item key={tech.name}>
                      <Box
                        sx={{
                          width: 110,
                          height: 110,
                          borderRadius: 3,
                          backgroundColor: "rgba(255,255,255,0.85)",
                          border: "1px solid rgba(0,0,0,0.1)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "0.2s",
                          boxShadow: 1,
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: 3,
                            backgroundColor: "rgba(255,255,255,0.95)",
                          },
                        }}
                      >
                        {tech.icon}
                        <Typography sx={{ mt: 1, fontSize: 14 }}>
                          {tech.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Tools column */}
              <Grid xs={12} md={12}>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  Tools & Collaboration
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                  {toolsTech.map((tech) => (
                    <Grid item key={tech.name}>
                      <Box
                        sx={{
                          width: 110,
                          height: 110,
                          borderRadius: 3,
                          backgroundColor: "rgba(255,255,255,0.85)",
                          border: "1px solid rgba(0,0,0,0.1)",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "0.2s",
                          boxShadow: 1,
                          "&:hover": {
                            transform: "translateY(-3px)",
                            boxShadow: 3,
                            backgroundColor: "rgba(255,255,255,0.95)",
                          },
                        }}
                      >
                        {tech.icon}
                        <Typography sx={{ mt: 1, fontSize: 14 }}>
                          {tech.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Typography variant="h2" component="h2">
            Projects
          </Typography>
          <Box className="faded-panel" sx={{ display: "inline-block" }}>
            {/* Tabs Navigation */}

            <Tabs
              color="#0D47A1"
              value={selectedMainTab}
              onChange={(_, newValue) => setSelectedMainTab(newValue)}
              centered
              sx={{
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: "24px",
                  mx: 1,
                  px: 2,
                  borderRadius: "20px",
                  minHeight: "40px",
                },
                "& .Mui-selected": {
                  backgroundColor: "#0D47A1",
                  color: "white !important",
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              <Tab label="Game Dev" sx={{ fontSize: 24 }} />
              <Tab label="Web Dev" sx={{ fontSize: 24 }} />
            </Tabs>
            <Divider sx={{ my: 1.5, opacity: 0.6 }} />
            {/*Display GAME Dev Projects*/}
            {selectedMainTab === 0 && (
              <Tabs
                value={selectedGameDevTab}
                onChange={(_, newValue) => setGameDevSelectedTab(newValue)}
                centered
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontSize: "16px",
                    mx: 1,
                    px: 2,
                    borderRadius: "20px",
                    minHeight: "40px",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#0D47A1",
                    color: "white !important",
                  },
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                {gameDevProjects.map((project, index) => (
                  <Tab
                    key={index}
                    label={project.title}
                    sx={{ fontSize: 14 }}
                  />
                ))}
              </Tabs>
            )}
            {/*Display WEB Dev Projects*/}
            {selectedMainTab === 1 && (
              <Tabs
                value={selectedWebDevTab}
                onChange={(_, newValue) => setWebDevSelectedTab(newValue)}
                centered
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "none",
                    fontSize: "16px",
                    mx: 1,
                    px: 2,
                    borderRadius: "20px",
                    minHeight: "40px",
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#0D47A1",
                    color: "white !important",
                  },
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                {webDevProjects.map((project, index) => (
                  <Tab
                    key={index}
                    label={project.title}
                    sx={{ fontSize: 14 }}
                  />
                ))}
              </Tabs>
            )}
          </Box>

          {/* Project Content */}
          <Box
            sx={{
              mt: 3,
              mb: 10,
            }}
          >
            {activeProjects[activeTabIndex]?.video ? (
              <video
                src={gameDevProjects[selectedGameDevTab].video}
                controls
                playsInline
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <img
                src={activeProjects[activeTabIndex].image}
                alt={activeProjects[activeTabIndex]?.altdescription}
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  maxHeight: "505px",
                  borderRadius: "8px",
                  objectFit: "contain",
                }}
              />
            )}

            {/* Project Description */}

            <Typography variant="h4" component="h3" sx={{ mt: 2 }}>
              {activeProjects[activeTabIndex].title}
            </Typography>
            <Box className="faded-panel">
              <Typography variant="body1" sx={{ mt: 1 }} whiteSpace="pre-line">
                {activeProjects[activeTabIndex].description}
              </Typography>
            </Box>

            {/*Link Button */}
            <Button
              sx={{
                backgroundColor: "#0D47A1",
                mt: 6,
                boxShadow: 6,
                "&:hover": { boxShadow: 12, backgroundColor: "#3175daff" },
              }}
              variant="contained"
              href={activeProjects[activeTabIndex].linkURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {activeProjects === gameDevProjects
                ? "View on Itch.io"
                : "View website"}
            </Button>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
