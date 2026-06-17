export default function GlassCode({
  blur,
  opacity,
  radius,

  cardColor,

  bgColor,

  gradientEnabled,
  gradientType,
  gradientAngle,

  gradientColor1,
  gradientColor2,
  gradientColor3,
}) {
  const hexToRgb = (hex) => {
    const bigint = parseInt(
      hex.replace("#", ""),
      16
    );

    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const rgb = hexToRgb(cardColor);

  let gradientCss = "";

  if (gradientEnabled) {
    if (gradientType === "linear") {
      gradientCss = `linear-gradient(${gradientAngle}deg, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
    }

    if (gradientType === "radial") {
      gradientCss = `radial-gradient(circle, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
    }

    if (gradientType === "conic") {
      gradientCss = `conic-gradient(from ${gradientAngle}deg, ${gradientColor1}, ${gradientColor2}, ${gradientColor3})`;
    }
  }

  const css = `
.background-color {
  background: ${bgColor};
}

${
  gradientEnabled
    ? `.background-gradient {
  background: ${gradientCss};
  opacity: 0.85;
}

`
    : ""
}.glass-card {
  background: rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity});
  backdrop-filter: blur(${blur}px);
  -webkit-backdrop-filter: blur(${blur}px);
  border-radius: ${radius}px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  position: relative;
}
`;

  const copyCss = () => {
    navigator.clipboard.writeText(css);
  };

  return (
    <div
      className="
        mt-6
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        sm:p-6
      "
    >
      <div
        className="
          mb-4
          flex
          flex-col
          gap-3
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <h2
          className="
            text-lg
            font-bold
            sm:text-xl
          "
        >
          Generated CSS
        </h2>

        <button
          onClick={copyCss}
          className="
            w-full
            rounded-xl
            bg-black
            px-4
            py-2
            text-sm
            text-white
            sm:w-auto
          "
        >
          Copy CSS
        </button>
      </div>

      <pre
        className="
          overflow-x-auto
          rounded-3xl
          bg-zinc-950
          p-4
          sm:p-6
          text-xs
          sm:text-sm
          text-white
        "
      >
        <code>{css}</code>
      </pre>
    </div>
  );
}