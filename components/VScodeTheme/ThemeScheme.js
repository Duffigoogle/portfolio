import styled from "styled-components";
import { mediaQueries } from "../common/breakpoints";

const ThemeSchemaComp = ({
  name,
  publisher,
  theme,
  closeModally,
  setShowSecondModal,
}) => {
  // function to set a given theme/color-scheme
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  const setThemeAndCloseModals = () => {
    setTheme(theme);
    setTimeout(() => {
      // close the two modals
      setShowSecondModal(false);
      closeModally();
    }, 5000);
  };

  return (
    <ThemeSchemaContainer setShowSecondModal={setShowSecondModal}>
      <button onClick={() => setThemeAndCloseModals} title="set color theme">
        <ThemeInfo>
          <h3>{name}</h3>
          <p>{publisher}</p>
        </ThemeInfo>
      </button>
    </ThemeSchemaContainer>
  );
};

export default ThemeSchemaComp;

const ThemeSchemaContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;

  button {
    margin-top: 0.1rem;
    border: none;
    background: var(--button-bg);
    color: var(--button-text);
    padding: 0.15rem 0.5rem;
    font-weight: 600;
    cursor: pointer;

    :focus {
      outline: 1px solid var(--accent-color);
    }
  }
`;

const ThemeInfo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.9rem;
  width: 25rem;

  ${mediaQueries("tabletMax")`
      width: 21rem;
  `}
  ${mediaQueries("mobileLX")`
      width: 18rem;
  `}
  ${mediaQueries("mobileS")`
      width: 15rem;
  `}

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
  }

  h3 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.7rem;
    font-style: italic;
    color: #ccc;
  }
`;
