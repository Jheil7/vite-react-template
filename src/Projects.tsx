import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Tabs, Tab, Button, Card, CardContent, Grid2 } from "@mui/material";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PublicIcon from "@mui/icons-material/Public";
import BuildIcon from "@mui/icons-material/Build";

const projects = [
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
          <Typography variant="h2" component="h2">
            About me:
          </Typography>
          <Typography>
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
        <Box>
          <Typography variant="h2" component="h2">
            Skills:
          </Typography>
          <Grid2 container spacing={2} justifyContent="center">
            <Card
              sx={{
                padding: 4,
                maxWidth: 400,
                boxShadow: 6,
                "&:hover": { boxShadow: 12 },
              }}
            >
              <Typography variant="h4" component="h3">
                Game Development:
              </Typography>
              <Typography variant="h5" component="h4">
                <CardContent>
                  {<SportsEsportsIcon fontSize="large" />}
                </CardContent>
                <ul
                  style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
                >
                  <li>Unity and Unreal Engine</li>
                  <li>C#/C++</li>
                  <li>ScriptableObjects</li>
                  <li>Shader Graph</li>
                  <li>Cinemachine</li>
                  <li>Unity’s New Input System</li>
                  <li>uGUI / UI Toolkit</li>
                  <li>Animation Playback</li>
                </ul>
              </Typography>
            </Card>
            <Card
              sx={{
                padding: 4,
                maxWidth: 400,
                boxShadow: 6,
                "&:hover": { boxShadow: 12 },
              }}
            >
              <Typography variant="h4" component="h3">
                Tools and Collaboration:
              </Typography>
              <Typography variant="h5" component="h4">
                <CardContent>{<BuildIcon fontSize="large" />}</CardContent>
                <ul
                  style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
                >
                  <li>Git</li>
                  <li>Github</li>
                  <li>Itch.io Deployment</li>
                  <li>Gamejams</li>
                  <li>Trello</li>
                  <li>Jira</li>
                </ul>
              </Typography>
            </Card>
            <Card
              sx={{
                padding: 4,
                maxWidth: 400,
                boxShadow: 6,
                "&:hover": { boxShadow: 12 },
              }}
            >
              <Typography variant="h4" component="h3">
                Web Development:
              </Typography>
              <CardContent>{<PublicIcon fontSize="large" />}</CardContent>
              <Typography variant="h5" component="h4">
                <ul
                  style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }}
                >
                  <li>Javascript</li>
                  <li>React</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </Typography>
            </Card>
          </Grid2>
        </Box>
        <Box>
          <Typography variant="h2" component="h2">
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
          <Box sx={{ mt: 3, mb: 10 }}>
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
                alt={projects[selectedTab].altdescription}
                style={{
                  width: "100%",
                  maxWidth: "900px",
                  borderRadius: "8px",
                }}
              />
            )}

            {/* Project Description */}
            <Typography variant="h4" component="h3" sx={{ mt: 2 }}>
              {projects[selectedTab].title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {projects[selectedTab].description}
            </Typography>

            {/* Itch.io Link Button */}
            <Button
              sx={{ mt: 2, boxShadow: 6, "&:hover": { boxShadow: 12 } }}
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
