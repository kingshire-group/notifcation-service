import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledModal = styled(motion.div)`
  width: clamp(90%, 7rem, 90%);
  height: min (50%, 3rem);
  background-color: white;
  margin: auto;
  border-radius: 1.2rem;
`

export const StyledBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`