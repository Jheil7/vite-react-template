import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contactInfo = "Email Adress: jmhe222@gmail.com";

export default function Contact() {
  return (
    <Box component="footer" id="contact" sx={{ pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4.5 },
            borderRadius: 6,
            border: "1px solid rgba(126, 164, 194, 0.16)",
            background:
              "linear-gradient(180deg, rgba(22,32,45,0.98) 0%, rgba(15,22,33,0.98) 100%)",
            boxShadow: "0 24px 60px rgba(0, 0, 0, 0.28)",
          }}
        >
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={3}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", lg: "center" }}
          >
            <Box>
              <Typography
                variant="h2"
                component="h2"
                sx={{ fontSize: { xs: "2.25rem", md: "3rem" }, mb: 1 }}
              >
                Contact
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  color: "text.secondary",
                }}
              >
                {contactInfo}
              </Typography>
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ width: { xs: "100%", lg: "auto" } }}
            >
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                target="_blank"
                href="https://github.com/Jheil7"
                sx={{
                  justifyContent: "flex-start",
                  borderColor: "rgba(126, 164, 194, 0.18)",
                  color: "text.primary",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedInIcon />}
                target="_blank"
                href="https://www.linkedin.com/in/joseph-m-heil/"
                sx={{
                  justifyContent: "flex-start",
                  borderColor: "rgba(126, 164, 194, 0.18)",
                  color: "text.primary",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<LanguageIcon />}
                target="_blank"
                href="https://jmhe222.itch.io"
                sx={{
                  justifyContent: "flex-start",
                  borderColor: "rgba(126, 164, 194, 0.18)",
                  color: "text.primary",
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
              >
                Itch.io
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
