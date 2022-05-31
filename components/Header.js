import PropTypes from "prop-types";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";

export default function Header(props) {
  // const classes = useStyles();
  const { sections, title } = props;

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="a" href="/">
            Bengsiswanto Hendrawan
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
