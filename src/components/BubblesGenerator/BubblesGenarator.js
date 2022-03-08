import Bubble from "../Bubble/Bubble";

const colors = [
  "#ffbe0b",
  "#fb5607",
  "#ff006e",
  "#8338ec",
  "#3a86ff",
  "#43aa8b",
  "#90be6d",
  "#800f2f",
  "#003049",
];

function BubblesGenerator() {
  return (
    <>
      {colors.map((c) => (
        <Bubble color={c} key={`bubble-color-${c}`} />
      ))}
    </>
  );
}

export default BubblesGenerator;
