import styled from "styled-components";

const ThemeSchemaComp = ({ name, publisher, theme }) => {
  // function to set a given theme/color-scheme
  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeSchemaContainer>
      <button onClick={() => setTheme(theme)} title="set color theme">
        <ThemeInfo>
          <h3>{name}</h3>
          <p>{publisher}</p>
        </ThemeInfo>
      </button>
      {/* <button>Set Color Theme</button> */}
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
  padding: 0 0.7rem;
  width: 20rem;
  /* background-color: skyblue; */

  :hover {
    background-color: rgba(255, 255, 255, 0.5);
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
