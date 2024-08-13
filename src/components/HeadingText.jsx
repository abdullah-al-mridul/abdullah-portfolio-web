const HeadingText = ({ word }) => {
  const __letterArr__ = [...word];
  const __isRed__ = [
    "MERN",
    "stack",
    "developer",
    "full-stack",
    "web",
    "developer",
    "development",
  ].includes(word);

  return (
    <span
      className={`inline-flex mr-3 ${
        __isRed__ ? "text-[#C778DD] grad-text" : ""
      }`}
    >
      {__letterArr__.map((letter, idx) => {
        return (
          <span key={idx} className="wow animate__animated inline-block ">
            <span
              className={`wow animate__animated bounce__word transition-all inline-block hover:text-[#03e6ff] ${
                __isRed__ ? "__overTextBlue__" : ""
              }`}
              data-wow-duration="0.5s"
              onMouseEnter={(e) =>
                e.target.classList.add("animate__rubberBand")
              }
              onMouseLeave={(e) =>
                e.target.classList.remove("animate__rubberBand")
              }
              key={idx}
            >
              {letter}
            </span>
          </span>
        );
      })}
      {"  "}
    </span>
  );
};
export default HeadingText;
