// import projects from "./Project_data";
// import ProjectSchema from "./Project_Schema";
// import styled from "styled-components";
// import { useContext } from "react";
// import { CalculateHeightContext } from "../../context/index";

export default function ProjectComp() {
  const [selectedCount, setSelectedCount] = useState(7);
  const [selectedArea, setSelectedArea] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleChange = (e) => {
    if (!e.target.checked && selectedCount <= 1) {
      e.target.checked = true;
    } else {
      const area_copy = selectedArea;
      setSelectedCount({
        selectedCount: selectCount + (area_copy[e.target.name] ? -1 : 1),
      });
      area_copy[e.target] = !area_copy[e.target.name];

      return handleChange(selectedArea);
    }
  };

  return (
    <>
      <p>Text</p>
      <div>
        <label htmlFor="asia">
          <input
            type="checkbox"
            name="0"
            id="asia"
            defaultChecked={true}
            onChange={handleChange}
          />
          ASIA
        </label>
        <br />
        <label htmlFor="europa">
          <input
            type="checkbox"
            name="1"
            id="europa"
            defaultChecked={true}
            onChange={handleChange}
          />{" "}
          EUROPA{" "}
        </label>
        <br />
        <label htmlFor="africa">
          <input
            type="checkbox"
            name="2"
            id="africa"
            defaultChecked={true}
            onChange={handleChange}
          />{" "}
          AFRICA{" "}
        </label>
        <br />
        <label htmlFor="south-america">
          <input
            type="checkbox"
            name="3"
            id="south-america"
            defaultChecked={true}
            onChange={handleChange}
          />{" "}
          SOUTH-AMERICA
        </label>
        <br />
        <label htmlFor="north-america">
          <input
            type="checkbox"
            name="4"
            id="north-america"
            defaultChecked={true}
            onChange={handleChange}
          />{" "}
          NORTH-AMERICA
        </label>
        <br />
        <label htmlFor="oceania">
          <input
            type="checkbox"
            name="5"
            id="oceania"
            defaultChecked={true}
            onChange={handleChange}
          />{" "}
          AUSTRALIA
        </label>
        <br />
        <label htmlFor="oceania">
          <input
            type="checkbox"
            name="5"
            id="oceania"
            defaultChecked={true}
            onChange={handleChange}
          />{" "}
          ANTARTICA{" "}
        </label>
        <br />
      </div>
    </>
  );
}
