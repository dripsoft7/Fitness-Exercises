import styled from "styled-components";
import { useState } from "react";
import HomeContent from "./HomeContent";
import { Box } from "@mui/material";

const Home = () => {
  const [loaded, setLoading] = useState(false);

  return (
    <Box>
      <HomeContent />
    </Box>
  );
};

export default Home;
