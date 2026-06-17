export default function Code({
  previewColor,

  gradientEnabled,
  gradientType,
  gradientAngle,

  gradientColor1,
  gradientColor2,
  gradientColor3,

  cardGradientEnabled,

  cardColor,

  radius,

  darkShadowX,
  darkShadowY,
  darkShadowBlur,
  darkShadowOpacity,

  lightShadowX,
  lightShadowY,
  lightShadowBlur,
  lightShadowOpacity,

  innerLightX,
  innerLightY,
  innerLightBlur,
  innerLightOpacity,

  innerDarkX,
  innerDarkY,
  innerDarkBlur,
  innerDarkOpacity,

  darkShadowColor,
  lightShadowColor,

  innerLightColor,
  innerDarkColor,
}) {
  let gradientCss = "none";

  let cardGradientCss = cardColor;

  const hexWithOpacity = (hex, opacity) => {
    const alpha = Math.round(opacity * 255)
      .toString(16)
      .padStart(2, "0");

    return `${hex}${alpha}`;
  };

  if (gradientEnabled) {
    if (gradientType === "linear") {
      gradientCss = `linear-gradient(
        ${gradientAngle}deg,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }

    if (gradientType === "radial") {
      gradientCss = `radial-gradient(
        circle,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }

    if (gradientType === "conic") {
      gradientCss = `conic-gradient(
        from ${gradientAngle}deg,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }
  }

  if (cardGradientEnabled) {
    if (gradientType === "linear") {
      cardGradientCss = `linear-gradient(
        ${gradientAngle}deg,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }

    if (gradientType === "radial") {
      cardGradientCss = `radial-gradient(
        circle,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }

    if (gradientType === "conic") {
      cardGradientCss = `conic-gradient(
        from ${gradientAngle}deg,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }
  }

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);

    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const darkRgb = hexToRgb(darkShadowColor);

  const lightRgb = hexToRgb(lightShadowColor);

  const innerLightRgb = hexToRgb(innerLightColor);

  const innerDarkRgb = hexToRgb(innerDarkColor);

  const css = `
.preview {
  background: ${previewColor};
}

.preview-background {
  background: ${gradientEnabled ? gradientCss : previewColor};
  border-radius: 20px;
  overflow: hidden;
}

.card {
  background: ${
    cardGradientEnabled
      ? cardGradientCss
      : cardColor
  };
  border-radius: ${radius}px;
  box-shadow:
    ${darkShadowX}px ${darkShadowY}px ${darkShadowBlur}px rgba(${darkRgb.r},${darkRgb.g},${darkRgb.b},${darkShadowOpacity}),
    ${lightShadowX}px ${lightShadowY}px ${lightShadowBlur}px rgba(${lightRgb.r},${lightRgb.g},${lightRgb.b},${lightShadowOpacity}),
    inset ${innerLightX}px ${innerLightY}px ${innerLightBlur}px rgba(${innerLightRgb.r},${innerLightRgb.g},${innerLightRgb.b},${innerLightOpacity}),
    inset ${innerDarkX}px ${innerDarkY}px ${innerDarkBlur}px rgba(${innerDarkRgb.r},${innerDarkRgb.g},${innerDarkRgb.b},${innerDarkOpacity});
}
`;

  const copyCss = () => {
    navigator.clipboard.writeText(css);
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-4
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          justify-between
        "
      >
        <h2
          className="
            text-lg
            font-semibold
          "
        >
          Generated CSS
        </h2>

        <button
          onClick={copyCss}
          className="
            rounded-lg
            bg-black
            px-4
            py-2
            text-sm
            text-white
          "
        >
          Copy CSS
        </button>
      </div>

      <pre
        className="
          overflow-x-auto
          rounded-xl
          bg-zinc-950
          p-4
          text-sm
          text-white
        "
      >
        <code>{css}</code>
      </pre>
    </div>
  );
}