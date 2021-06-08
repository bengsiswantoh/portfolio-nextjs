import React from "react";

import Container from "@material-ui/core/Container";

import Header from "../components/Header";

import { sections } from "../data/sections";

export default function Home() {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Header title="Bengsiswanto Hendrawan" sections={sections} />
      </Container>
    </React.Fragment>
  );
}
