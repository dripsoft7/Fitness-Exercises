import styled from "styled-components";
import { useState } from "react";
import SearchBar from "./SearchBar";
import cbum from "../images/Cbum.webp";
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
