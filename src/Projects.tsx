import { useState } from "react";
import { Tab, Tabs, Button } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

type Project = {
  title: string;
  description: string;
  image?: string;
  linkURL?: string;
  altdescription?: string;
  video?: string;
};

const gameDevProjects: Project[] = [
  {
    title: "Tectonicus",
    image: "/images/Tectonicus.png",
    altdescription:
      "Promotional artwork for Tectonicus, a historically accurate narrative card game with illustrated cards and a fantasy-inspired UI.",
    description:
      "A historically accurate narrative card game developed at the indie startup Gamucatex. I contributed to the first iteration of the game's story mode, created a new save system using JSON (replacing PlayerPrefs), revamped the deckbuilder UI, added card back selection in the store, and transitioned the entire game from a 2D scene to 3D, updating all UI accordingly. I also learned FMOD to add new audio to the game, improved card animations with DOTween, and fixed numerous bugs. Working in a small, fluctuating team of 3-8 developers, I frequently dealt with legacy code and removed dependencies to implement new features cleanly. The game was built in Unity with input from a dedicated team of historians crafting authentic lore and card descriptions.",
    linkURL: "https://gamucatex.itch.io/tectonicus",
  },
  {
    title: "Extinguished",
    video: "/videos/ExtinguishedMP4.mp4",
    description:
      "A 2D platformer created in a two-week game jam for the theme \"Horror,\" placing 34th out of 496 entries. Developed with one other team member who handled animations and art, while I focused on player movement, interactions, and level design. My contributions included implementing Unity's Tilemap system for level creation, adding parallax background movement to enhance depth, and integrating audio assets into the game. I also designed a dynamic lighting mechanic where the player carries an orb of light that gradually shrinks as a meter depletes, leaving most of the map in darkness. The meter refills at checkpoints, creating natural tension and pacing throughout each level. I also learned Unity animation events to better synchronize hazard timing and player feedback.One of the most valuable lessons came from post-jam feedback on hazard hitboxes. I studied Celeste and learned how many platformers subtly favor the player, allowing for \"cheated\" close calls that feel satisfying and memorable. I applied this by adjusting hitboxes to make hazards more forgiving while keeping the challenge intact.",
    linkURL: "https://jmhe222.itch.io/extinguished",
  },
  {
    title: "Sprout",
    video: "/videos/SproutMP4.mp4",
    description:
      "A 2D puzzle-platformer created in a 10-day game jam, placing 77th out of 1,026 entries. The game begins in a tiny underground village and transitions to a large, normal-sized world where the player can shift between small and normal forms. This size-shifting mechanic drives both traversal and puzzle-solving, allowing players to access new paths, manipulate objects, and interact with the world in different ways. I programmed the core size-shifting system, implemented puzzles that required creative form changes, and built platforming challenges using Unity's Tilemap system. I also created the sequence that transitions the player from underground to above ground, including camera work, animations, and environmental interactions. The project was developed entirely with free assets, collaborating with a 2D artist and an audio designer. My focus was on integrating their work into the gameplay seamlessly while keeping scope manageable for the jam deadline.",
    linkURL: "https://jmhe222.itch.io/sprout",
  },
  {
    title: "Block Bouncer",
    image: "/images/Block1.png",
    altdescription:
      "Screenshot of the title screen from Block Bouncer, a local multiplayer battler where players destroy and replace blocks to knock each other off platforms.",
    description:
      "A local multiplayer battler inspired by couch co-op favorites like Duck Game, Gang Beasts, and Super Smash Bros. The objective is to knock your opponent off their platform using two primary methods: slamming one of your own blocks (which removes the corresponding block on your opponent's side), or pelting them with rubble. Rubble is earned by breaking your own blocks and can be fired repeatedly to build up knockback, similar to the damage/launch system in Super Smash Bros. Blocks aren't gone forever as you can shoot a block back down to replace it, creating opportunities to recover space, bait your opponent, or force mistakes. I developed all core gameplay systems in Unity, including player movement, block destruction/replacement, rubble spawning, hit accumulation, and knockback physics. The game was designed for fast, chaotic matches that reward both aggressive play and clever block management. I plan to expand the game with an online lobby system in the future to allow remote multiplayer without matchmaking.",
    linkURL: "https://jmhe222.itch.io/block-bouncer",
  },
  {
    title: "Tower Defense Prototype",
    description:
      "An early gameplay experiment combining third-person combat with turret-based defense. Built in Unity as a proof of concept for blending action mechanics with traditional tower defense elements. The player controls a third-person character who can move, swing a weapon, and place turrets on a grid around a central base. Exploring the map leads to a cave full of bats that can be fought directly, and entering the cave starts a timer until a wave of bats attacks the base. Turrets can be placed to automatically attack enemies, and the enemy pathfinding updates dynamically as new obstacles are placed. One of the main challenges was working with the Grid Builder 2 asset. I collaborated with the asset's developer to resolve a bug where turrets were active during the placement preview instead of only after being placed. This fix was incorporated into an official update of the tool. While the prototype has no full gameplay loop or resource system yet, it serves as a foundation for potential future development with expanded enemy types, wave mechanics, and player progression.",
    video: "/videos/SurvivalTDMP4.mp4",
    linkURL: "https://jmhe222.itch.io/survival-tower-defense",
  },
  {
    title: "Shape Shooter",
    video: "/videos/GrowthJamClipMP4.mp4",
    description:
      "My first ever game jam entry, created in Unity for a small community jam. Since I was unfamiliar with how jams worked, the game wasn't rated by anyone, but it served as a valuable learning experience in both scope management and core mechanic implementation. The premise is to shoot balls whose color is determined by their size, based on an array of static size-color pairs. Left click fires a \"grow\" bullet and right click fires a \"shrink\" bullet, changing both the ball's size and its color. The goal is to fit the ball through appropriately sized hoops along a course until it reaches the finish line. The finish line also has a color requirement, so players must reach it with the correct combination of size and color. One of the biggest lessons I learned was the importance of using raycasts for shooters instead of relying on Unity's physics system for bullets. At high speeds, physics-based projectiles were unreliable and sometimes failed to register hits, so I discovered how ray-based detection can solve that issue.",
    linkURL: "https://jmhe222.itch.io/shape-shooter",
  },
];

const webDevProjects: Project[] = [
  {
    title: "U.S. Soccer Federation",
    description: `Full-Stack Software Development

Contributed full-stack software development services within an established production application, technology stack, and engineering workflow. Implemented responsive interface improvements, data validation, workflow logic, reporting features, and production bug fixes while working through an existing version control and deployment process.

Project-specific code and application visuals are not publicly displayed due to confidentiality requirements.`,
  },
  {
    title: "This Portfolio",
    description: `Tech: React, TypeScript, Material UI, Railway
                  
    Highlights:
                - Designed a clean multi-section layout featuring a skills overview, game dev projects, and web dev projects
                - Implemented nested tab navigation with dynamic content switching based on the selected category
                - Built reusable UI components using the MUI Box, Grid, Card, and Tabs systems
                - Added a persistent AppBar with resume download support and contextual page navigation
                - Created a footer with external links to GitHub, LinkedIn, and Itch.io
                - Deployed to Vercel with production bundling and automatic redeployment on push

        Focus Areas: component composition, state-driven UI, responsive layout, custom MUI theming`,
    linkURL: "https://joeyheil.up.railway.app/",
  },
  {
    title: "WoW Guild Website",
    description: `Tech: Next.js, React, JavaScript, TailwindCSS, Vercel, REST APIs, GraphQL, OAuth

Highlights:
- Built a live guild website displaying roster and raid progression data
- Integrated Blizzard and WarcraftLogs APIs using server-side data fetching
- Implemented OAuth-secured API requests and environment-based secrets
- Created a custom guild application flow with Discord webhook integration
- Designed responsive layouts with Tailwind for desktop and mobile

Focus Areas: server-side rendering, API integration, OAuth flows, responsive UI
`,
    image: "/images/GuildWebsite.png",
    linkURL: "https://raise-your-eyes.vercel.app/",
  },
  {
    title: "Pizza Menu",
    description: `Tech: React, JavaScript, CSS, Vercel

    Highlights:
    - Built a reusable Pizza component used to render images, ingredients, and pricing
    - Implemented conditional rendering to gray out pizzas and label them "Sold Out" when out of stock
    - Added a dynamic footer that shows whether the restaurant is currently open based on real-time hours
    - Practiced component mapping, props-driven UI, and basic styling
    - Designed a purposefully small but functional app demonstrating component structure and flow

    Focus Areas: conditional rendering, component mapping, UI state design
    `,
    image: "/images/PizzaMenu.png",
    linkURL: "https://pizza-menu-joeyh.vercel.app/",
  },
  {
    title: "Roster App",
    description: `Tech: React, JavaScript, CSS, Vercel

    Highlights:
    - Created an input-driven system for adding new players with automatic list rendering
    - Implemented a dynamic counter that shows the total roster size and how many players have paid
    - Added toggles and sorting options: alphabetical order, payment status, or original entry order
    - Built a clean UI allowing users to remove individual players or fully reset the roster
    - Developed reusable components for list items, checkboxes, and sorting controls

    Focus Areas: state management, controlled inputs, sorting/filter logic, interactive UI design
    `,
    image: "/images/RosterImage.png",
    linkURL: "https://soccer-roster-joeyh.vercel.app/",
  },
];

const surfaceSx = {
  borderRadius: 6,
  border: "1px solid rgba(126, 164, 194, 0.16)",
  background:
    "linear-gradient(180deg, rgba(22,32,45,0.98) 0%, rgba(15,22,33,0.98) 100%)",
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.28)",
};

function ProjectSelector({
  project,
  selected,
  index,
  onClick,
}: {
  project: Project;
  selected: boolean;
  index: number;
  onClick: () => void;
}) {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        width: "100%",
        borderRadius: 5,
        textAlign: "left",
        alignItems: "stretch",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          ...surfaceSx,
          width: "100%",
          p: 2.25,
          color: selected ? "#fff" : "text.primary",
          background: selected
            ? "linear-gradient(145deg, #24415b 0%, #18293a 100%)"
            : surfaceSx.background,
          transform: selected ? "translateY(-2px)" : "none",
          boxShadow: selected
            ? "0 24px 44px rgba(0, 0, 0, 0.34)"
            : surfaceSx.boxShadow,
          transition: "transform 180ms ease, box-shadow 180ms ease",
        }}
      >
        <Stack spacing={1.1}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: "0.12em",
              color: selected ? "rgba(255,255,255,0.74)" : "text.secondary",
            }}
          >
            Project {String(index + 1).padStart(2, "0")}
          </Typography>
          <Typography variant="h6" component="h3">
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: selected ? "rgba(255,255,255,0.82)" : "text.secondary",
            }}
          >
            {project.video
              ? "Video showcase"
              : project.image
                ? "Image showcase"
                : "Project details"}
          </Typography>
        </Stack>
      </Paper>
    </ButtonBase>
  );
}

function ProjectPreview({ project }: { project: Project }) {
  if (project.video) {
    return (
      <Box
        sx={{
          minHeight: { xs: 280, md: 420 },
          p: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(17,44,70,0.46) 0%, rgba(126,164,194,0.12) 100%)",
        }}
      >
        <video
          src={project.video}
          controls
          playsInline
          style={{
            width: "100%",
            maxHeight: "100%",
            borderRadius: "24px",
            objectFit: "contain",
          }}
        />
      </Box>
    );
  }

  if (project.image) {
    return (
      <Box
        sx={{
          minHeight: { xs: 280, md: 420 },
          p: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, rgba(17,44,70,0.46) 0%, rgba(126,164,194,0.12) 100%)",
        }}
      >
        <Box
          component="img"
          src={project.image}
          alt={project.altdescription || project.title}
          sx={{
            width: "100%",
            maxHeight: "100%",
            borderRadius: 4,
            objectFit: "contain",
          }}
        />
      </Box>
    );
  }

  return null;
}

export default function ProjectsTabs() {
  const [selectedMainTab, setSelectedMainTab] = useState(0);
  const [selectedGameDevTab, setSelectedGameDevTab] = useState(0);
  const [selectedWebDevTab, setSelectedWebDevTab] = useState(0);

  const activeProjects =
    selectedMainTab === 0 ? webDevProjects : gameDevProjects;
  const activeTabIndex =
    selectedMainTab === 0 ? selectedWebDevTab : selectedGameDevTab;
  const activeProject = activeProjects[activeTabIndex];
  const activeProjectHasMedia = Boolean(
    activeProject.video || activeProject.image
  );

  return (
    <Container
      maxWidth="xl"
      sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 6, md: 8 } }}
    >
      <Stack spacing={{ xs: 4, md: 6 }}>
        <Box component="section" id="projects">
          <Paper elevation={0} sx={{ ...surfaceSx, p: { xs: 3, md: 5 } }}>
            <Stack spacing={3.5}>
              <Stack
                direction={{ xs: "column", lg: "row" }}
                spacing={2}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", lg: "center" }}
              >
                <Typography variant="h2" component="h2">
                  Projects
                </Typography>

                <Tabs
                  value={selectedMainTab}
                  onChange={(_, newValue) => setSelectedMainTab(newValue)}
                  variant="scrollable"
                  allowScrollButtonsMobile
                  sx={{
                    minHeight: 0,
                    "& .MuiTabs-flexContainer": { gap: 1 },
                    "& .MuiTab-root": {
                      minHeight: 0,
                      minWidth: 0,
                      px: 2.25,
                      py: 1.1,
                      borderRadius: 999,
                      textTransform: "none",
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      color: "text.secondary",
                    },
                    "& .Mui-selected": {
                      backgroundColor: "primary.main",
                      color: "#0d141d !important",
                    },
                    "& .MuiTabs-indicator": {
                      display: "none",
                    },
                  }}
                >
                  <Tab label="Web Dev" />
                  <Tab label="Game Dev" />
                </Tabs>
              </Stack>

              <Grid container spacing={3}>
                <Grid item xs={12} lg={4}>
                  <Stack spacing={1.5}>
                    {activeProjects.map((project, index) => (
                      <ProjectSelector
                        key={project.title}
                        project={project}
                        index={index}
                        selected={index === activeTabIndex}
                        onClick={() =>
                          selectedMainTab === 0
                            ? setSelectedWebDevTab(index)
                            : setSelectedGameDevTab(index)
                        }
                      />
                    ))}
                  </Stack>
                </Grid>

                <Grid item xs={12} lg={8}>
                  <Stack spacing={2.5}>
                    {activeProjectHasMedia && (
                      <Paper
                        elevation={0}
                        sx={{ ...surfaceSx, overflow: "hidden" }}
                      >
                        <ProjectPreview project={activeProject} />
                      </Paper>
                    )}

                    <Typography variant="h3" component="h3">
                      {activeProject.title}
                    </Typography>

                    <Paper
                      elevation={0}
                      sx={{ ...surfaceSx, p: { xs: 3, md: 4 } }}
                    >
                      <Typography
                        variant="body1"
                        whiteSpace="pre-line"
                        sx={{
                          fontSize: { xs: "1rem", md: "1.04rem" },
                          lineHeight: 1.9,
                          color: "text.secondary",
                        }}
                      >
                        {activeProject.description}
                      </Typography>
                    </Paper>

                    {activeProject.linkURL && (
                      <Button
                        variant="contained"
                        href={activeProject.linkURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<OpenInNewRoundedIcon />}
                        sx={{
                          alignSelf: "flex-start",
                          backgroundColor: "primary.main",
                          color: "primary.contrastText",
                          boxShadow: "0 14px 28px rgba(0, 0, 0, 0.3)",
                          "&:hover": { backgroundColor: "primary.light" },
                        }}
                      >
                        {selectedMainTab === 0
                          ? "View Website"
                          : "View on Itch.io"}
                      </Button>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </Container>
  );
}
