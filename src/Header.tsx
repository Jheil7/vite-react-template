import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import resumeFile from "./assets/Joey Heil CV.pdf";

interface Props {
  window?: () => Window;
}

const drawerWidth = 280;
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100%",
        px: 3,
        py: 4,
        background:
          "linear-gradient(180deg, rgba(18,26,38,0.98) 0%, rgba(11,17,26,0.98) 100%)",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Joey Heil
          </Typography>
          <Typography
            variant="caption"
            sx={{
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "text.secondary",
            }}
          >
            Portfolio
          </Typography>
        </Box>

        <Divider />

        <List disablePadding>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component="a"
                href={item.href}
                sx={{
                  borderRadius: 3,
                  py: 1.25,
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Button
          variant="contained"
          href={resumeFile}
          download="Joey Heil Resume.pdf"
          startIcon={<DownloadRoundedIcon />}
          sx={{
            alignSelf: "flex-start",
            backgroundColor: "primary.main",
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          Download Resume
        </Button>
      </Stack>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        elevation={0}
        sx={{
          backgroundColor: "rgba(10, 15, 23, 0.82)",
          color: "text.primary",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(126, 164, 194, 0.14)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 80 } }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ flexGrow: 1, minWidth: 0 }}
            >
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: 2.5,
                  background:
                    "linear-gradient(135deg, #c68a64 0%, #7ea4c2 100%)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: '"Sora", "Segoe UI", sans-serif',
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  boxShadow: "0 16px 30px rgba(0, 0, 0, 0.32)",
                }}
              >
                JH
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 800, lineHeight: 1.15 }}
                >
                  Joey Heil
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "text.secondary",
                  }}
                >
                  Portfolio
                </Typography>
              </Box>
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  sx={{
                    px: 2,
                    color: "text.secondary",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "text.primary",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Button
              variant="contained"
              href={resumeFile}
              download="Joey Heil Resume.pdf"
              startIcon={<DownloadRoundedIcon />}
              sx={{
                display: { xs: "none", sm: "inline-flex" },
                ml: { md: 1.5 },
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                boxShadow: "0 14px 28px rgba(0, 0, 0, 0.32)",
                "&:hover": { backgroundColor: "primary.light" },
              }}
            >
              Download Resume
            </Button>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1, display: { md: "none" } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderLeft: "1px solid rgba(126, 164, 194, 0.14)",
            backgroundColor: "#101824",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
