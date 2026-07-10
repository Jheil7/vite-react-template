import { ReactNode } from "react";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import Box from "@mui/material/Box";
import BugReportRoundedIcon from "@mui/icons-material/BugReportRounded";
import CloudQueueRoundedIcon from "@mui/icons-material/CloudQueueRounded";
import CodeIcon from "@mui/icons-material/Code";
import Container from "@mui/material/Container";
import CssIcon from "@mui/icons-material/Css";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ExtensionRoundedIcon from "@mui/icons-material/ExtensionRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import GradientRoundedIcon from "@mui/icons-material/GradientRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import Grid from "@mui/material/Grid";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import JavascriptIcon from "@mui/icons-material/Javascript";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import Paper from "@mui/material/Paper";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import Stack from "@mui/material/Stack";
import StorageIcon from "@mui/icons-material/Storage";
import Typography from "@mui/material/Typography";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import WebIcon from "@mui/icons-material/Web";

type TechItem = {
  name: string;
  icon: ReactNode;
};

const gameDevTech = [
  { name: "Unity", icon: <SportsEsportsIcon fontSize="large" /> },
  { name: "C# / C++", icon: <DataObjectIcon fontSize="large" /> },
  { name: "Gameplay Systems", icon: <ExtensionRoundedIcon fontSize="large" /> },
  { name: "UI / UX Systems", icon: <ViewKanbanIcon fontSize="large" /> },
  { name: "ScriptableObjects", icon: <StorageIcon fontSize="large" /> },
  { name: "JSON / Save Systems", icon: <SaveRoundedIcon fontSize="large" /> },
  { name: "FMOD", icon: <GraphicEqRoundedIcon fontSize="large" /> },
  { name: "DOTween", icon: <AnimationRoundedIcon fontSize="large" /> },
  {
    name: "Shader Graph / URP",
    icon: <GradientRoundedIcon fontSize="large" />,
  },
  { name: "Cinemachine", icon: <VideocamRoundedIcon fontSize="large" /> },
  {
    name: "Tilemaps / 2D Tools",
    icon: <GridViewRoundedIcon fontSize="large" />,
  },
];

const webDevTech = [
  { name: "React", icon: <CodeIcon fontSize="large" /> },
  { name: "Next.js", icon: <WebIcon fontSize="large" /> },
  {
    name: "TypeScript / JavaScript",
    icon: <JavascriptIcon fontSize="large" />,
  },
  { name: "REST APIs", icon: <ApiRoundedIcon fontSize="large" /> },
  { name: "GraphQL", icon: <HubRoundedIcon fontSize="large" /> },
  { name: "OAuth 2.0", icon: <LockRoundedIcon fontSize="large" /> },
  { name: "Node.js", icon: <StorageIcon fontSize="large" /> },
  { name: "Tailwind CSS", icon: <CssIcon fontSize="large" /> },
  {
    name: "Material UI",
    icon: <DashboardCustomizeRoundedIcon fontSize="large" />,
  },
  { name: "PostgreSQL / Prisma", icon: <StorageIcon fontSize="large" /> },
  { name: "API Integrations", icon: <LinkRoundedIcon fontSize="large" /> },
  { name: "Vercel", icon: <RocketLaunchRoundedIcon fontSize="large" /> },
];

const toolsTech = [
  { name: "Git / GitHub", icon: <GitHubIcon fontSize="large" /> },
  { name: "Jira", icon: <AssignmentTurnedInIcon fontSize="large" /> },
  {
    name: "Agile Development",
    icon: <AutorenewRoundedIcon fontSize="large" />,
  },
  {
    name: "Debugging / Profiling",
    icon: <BugReportRoundedIcon fontSize="large" />,
  },
  { name: "Postman", icon: <SendRoundedIcon fontSize="large" /> },
  { name: "Trello", icon: <ViewKanbanIcon fontSize="large" /> },
  { name: "Upstash", icon: <CloudQueueRoundedIcon fontSize="large" /> },
  {
    name: "AI-Assisted Development",
    icon: <SmartToyRoundedIcon fontSize="large" />,
  },
];

const surfaceSx = {
  borderRadius: 6,
  border: "1px solid rgba(126, 164, 194, 0.16)",
  background:
    "linear-gradient(180deg, rgba(22,32,45,0.98) 0%, rgba(15,22,33,0.98) 100%)",
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.28)",
};

function SkillPanel({ title, items }: { title: string; items: TechItem[] }) {
  return (
    <Paper
      elevation={0}
      sx={{ ...surfaceSx, px: 3, pb: 3, pt: 4, height: "100%" }}
    >
      <Stack spacing={2.5}>
        <Typography variant="h5" component="h3" sx={{ lineHeight: 1.1 }}>
          {title}
        </Typography>
        <Grid container spacing={1.5}>
          {items.map((tech) => (
            <Grid item xs={6} sm={4} md={6} key={tech.name}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: 120,
                  p: 2,
                  borderRadius: 4,
                  border: "1px solid rgba(126, 164, 194, 0.14)",
                  background:
                    "linear-gradient(180deg, rgba(29, 42, 58, 0.98) 0%, rgba(23, 33, 47, 0.96) 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  gap: 1.5,
                  transition: "transform 180ms ease, box-shadow 180ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 16px 28px rgba(0, 0, 0, 0.26)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main" }}>{tech.icon}</Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: "0.85rem",
                    lineHeight: 1.35,
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
}

export default function Skills() {
  return (
    <Box component="section" id="skills">
      <Container
        maxWidth="xl"
        sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 2, md: 3 } }}
      >
        <Paper elevation={0} sx={{ ...surfaceSx, p: { xs: 3, md: 5 } }}>
          <Stack spacing={3.5}>
            <Typography variant="h2" component="h2">
              Skills
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={4}>
                <SkillPanel title="Web Development" items={webDevTech} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <SkillPanel title="Game Development" items={gameDevTech} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <SkillPanel title="Tools & Collaboration" items={toolsTech} />
              </Grid>
            </Grid>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
