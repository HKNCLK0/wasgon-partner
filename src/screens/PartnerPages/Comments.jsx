import React from "react";

import { LeftBar } from "../../components/Dashboard";

import { Header } from "../../components/main";

import { Box, Container } from "../../components/main/UI";

const Comments = () => {
  return (
    <>
      <Header />
      <Container>
        <Box className="w-11/12">
          <div className="w-full px-16 flex">
            <LeftBar />
            <h1>Comments</h1>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Comments;
