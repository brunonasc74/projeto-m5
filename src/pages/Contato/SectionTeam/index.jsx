import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../../components/styles/GlobalStyles";
import theme from "../../../theme";
import CardTeam from "./CardTeam";
import CardTeamReverse from "./CardTeam/cardTeamReverse";
import { Container, Box, BoxReverse } from "./style";

const SectionTeam = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <Container>
          <Box>
            <CardTeam
              image="./public/images/Bruno.jpg"
              name="Bruno Nascimento"
              role="Desenvolvedor(a) Fullstack"
              github="https://github.com/brunonasc74"
              linkedin="https://www.linkedin.com/in/brunohpn/"
              text="Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site"
            />
          </Box>
          <Box>
            <CardTeamReverse
              image="./public/images/shiellyn.jpeg"
              name="Shiellyn Ferreira"
              role="Desenvolvedor(a) Fullstack"
              github="https://github.com/ShiellynFerr"
              linkedin="https://www.linkedin.com/in/shiellyn-ferreira/"
              text="Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site"
            />
          </Box>
          <Box>
            <CardTeam
              image="./public/images/Bruna.jfif"
              name="Bruna Xavier"
              role="Desenvolvedor(a) Fullstack"
              github="https://github.com/bruxvr"
              linkedin="https://www.linkedin.com/in/brunarxavier/"
              text="Apaixonada por aprender e por descobrir que ainda há muito a ser aprendido. Sou uma recém entusiasta na tecnologia, e escolher o desenvolvimento web para investir tempo e empenho foi uma das minhas decisões mais acertadas. Tem sido uma das experiências mais incríveis e desafiadoras nessa transição de carreira. Não me arrependo nem por um segundo – em especial quando tenho resultados gratificantes como esse projeto."
            />
          </Box>
          <Box>
            <CardTeamReverse
              image="./public/images/kelly.jfif"
              name="Kelly Santos"
              role="Desenvolvedor(a) Fullstack"
              github="https://github.com/KellySanttos"
              linkedin="https://www.linkedin.com/in/kellysanttos/"
              text="Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site"
            />
          </Box>
          <Box>
            <CardTeam
              image="./public/images/arthur.jfif"
              name="Artur Tolentino"
              role="Desenvolvedor(a) Fullstack"
              github="https://github.com/ArturTolentino"
              linkedin="https://www.linkedin.com/in/artur-rodrigues-tolentino/"
              text="Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site Essa pessoa fez o site site site fez site"
            />
          </Box>
        </Container>
      </>
    </ThemeProvider>
  );
};

export default SectionTeam;
