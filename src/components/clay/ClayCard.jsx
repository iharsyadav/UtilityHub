export default function ClayCard({
  // Card
  cardColor,

  // Card Gradient
  cardGradientEnabled,
  gradientType,
  gradientAngle,
  gradientColor1,
  gradientColor2,
  gradientColor3,

  radius,

  // Outer Dark
  darkShadowX,
  darkShadowY,
  darkShadowBlur,
  darkShadowOpacity,

  // Outer Light
  lightShadowX,
  lightShadowY,
  lightShadowBlur,
  lightShadowOpacity,

  // Inner Light
  innerLightOpacity,
  innerLightX,
  innerLightY,
  innerLightBlur,

  // Inner Dark
  innerDarkOpacity,
  innerDarkX,
  innerDarkY,
  innerDarkBlur,

  // Colors
  darkShadowColor,
  lightShadowColor,
  innerLightColor,
  innerDarkColor,
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

  const darkRgb = hexToRgb(darkShadowColor);

  const lightRgb = hexToRgb(lightShadowColor);

  const innerLightRgb = hexToRgb(
    innerLightColor
  );

  const innerDarkRgb = hexToRgb(
    innerDarkColor
  );

  let background = cardColor;

  if (cardGradientEnabled) {
    if (gradientType === "linear") {
      background = `
        linear-gradient(
          ${gradientAngle}deg,
          ${gradientColor1},
          ${gradientColor2},
          ${gradientColor3}
        )
      `;
    }

    if (gradientType === "radial") {
      background = `
        radial-gradient(
          circle,
          ${gradientColor1},
          ${gradientColor2},
          ${gradientColor3}
        )
      `;
    }

    if (gradientType === "conic") {
      background = `
        conic-gradient(
          from ${gradientAngle}deg,
          ${gradientColor1},
          ${gradientColor2},
          ${gradientColor3}
        )
      `;
    }
  }

  return (
    <div
      className="
        h-[320px]
        w-[260px]
      "
      style={{
        background,

        borderRadius: `${radius}px`,

        boxShadow: `
          ${darkShadowX}px
          ${darkShadowY}px
          ${darkShadowBlur}px
          rgba(
            ${darkRgb.r},
            ${darkRgb.g},
            ${darkRgb.b},
            ${darkShadowOpacity}
          ),

          ${lightShadowX}px
          ${lightShadowY}px
          ${lightShadowBlur}px
          rgba(
            ${lightRgb.r},
            ${lightRgb.g},
            ${lightRgb.b},
            ${lightShadowOpacity}
          ),

          inset
          ${innerLightX}px
          ${innerLightY}px
          ${innerLightBlur}px
          rgba(
            ${innerLightRgb.r},
            ${innerLightRgb.g},
            ${innerLightRgb.b},
            ${innerLightOpacity}
          ),

          inset
          ${innerDarkX}px
          ${innerDarkY}px
          ${innerDarkBlur}px
          rgba(
            ${innerDarkRgb.r},
            ${innerDarkRgb.g},
            ${innerDarkRgb.b},
            ${innerDarkOpacity}
          )
        `,
      }}
    />
  );
}