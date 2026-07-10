import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const surfaceSx = {
  borderRadius: 6,
  border: "1px solid rgba(126, 164, 194, 0.16)",
  background:
    "linear-gradient(180deg, rgba(22,32,45,0.98) 0%, rgba(15,22,33,0.98) 100%)",
  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.28)",
};

export default function Home() {
  return (
    <Box component="section" id="about">
      <Container
        maxWidth="xl"
        sx={{ pt: { xs: 14, md: 18 }, pb: { xs: 2, md: 3 } }}
      >
        <Paper
          elevation={0}
          sx={{
            ...surfaceSx,
            p: { xs: 3, md: 5 },
          }}
        >
          <Stack spacing={2.5}>
            <Typography variant="h2" component="h2">
              About me
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 760,
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.9,
                color: "text.secondary",
                whiteSpace: "pre-line",
              }}
            >
              {`I'm a software and game developer with experience building gameplay systems, user interfaces, web applications, and API-driven tools. My background spans professional software development, indie game development, and personal projects using technologies including C#, Unity, React, and Next.js.

Most recently, I worked in a professional software development environment at USSF, contributing to an established codebase and collaborating within an existing development workflow. Outside of that work, I've built everything from narrative card game systems and polished game jam projects to web applications integrating live data from multiple third-party APIs.

I enjoy digging into unfamiliar systems, solving practical problems through code, and turning those solutions into reliable features and polished user experiences. Outside of development, I stay active through soccer and lifting and spend plenty of time gaming with friends.`}
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
