import styled from "styled-components";
import ThemeSchemaComp from "../components/VScodeTheme/ThemeScheme";
import { useContext } from "react";
import { CalculateHeightContext } from "../context/index";
import { Modal } from "../components/modals/CustomModal";

const SettingsPage = () => {
  const { elementRef } = useContext(CalculateHeightContext);

  return (
    <>
      <SettingsContainer ref={elementRef}>
        <h2>Manage Themes</h2>
        <ThemeSchemaComp
          name="GitHub Dark"
          publisher="GitHub"
          theme="github-dark"
          description="GitHub theme for VS Code"
        />
        <ThemeSchemaComp
          name="Mood Blink"
          publisher="Inem-Studio"
          theme="Mood blink"
          description="A dark theme for many editors, shells, and more."
        />
        <ThemeSchemaComp
          name="Color Splash"
          publisher="Ekom-Studio"
          theme="Color splash"
          description="A simple kiddy theme with bright colors."
        />
        <ThemeSchemaComp
          name="Glow Shades"
          publisher="UtomStudio"
          theme="Glow shades"
          description="A simple theme with Glow shades."
        />
        <ThemeSchemaComp
          name="Moonlight Call"
          publisher="Ima-Studio"
          theme="Moonlight calls"
          description="An arctic, north-bluish clean and elegant Visual Studio Code theme."
        />
      </SettingsContainer>

      <Modal />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Settings" },
  };
}

export default SettingsPage;

const SettingsContainer = styled.main`
  /* display: grid; */
  /* align-items: center; */
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  margin: 1rem 0;
  padding: 0.6rem 0;
  text-align: center;
  background-color: #919191;
  width: 20rem;

  h2 {
    font-weight: 700;
  }
`;
