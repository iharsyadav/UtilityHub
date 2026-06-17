export default function Preview({
  previewColor,

  gradientEnabled,
  gradientType,
  gradientAngle,

  gradientColor1,
  gradientColor2,
  gradientColor3,

  imageEnabled,
  bgImage,

  showCard,

  children,
}) {
  const getGradient = () => {
    if (!gradientEnabled) return previewColor;

    if (gradientType === "linear") {
      return `linear-gradient(
        ${gradientAngle}deg,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }

    if (gradientType === "radial") {
      return `radial-gradient(
        circle,
        ${gradientColor1},
        ${gradientColor2},
        ${gradientColor3}
      )`;
    }

    return `conic-gradient(
      from ${gradientAngle}deg,
      ${gradientColor1},
      ${gradientColor2},
      ${gradientColor3}
    )`;
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        p-8
      "
      style={{
        background: previewColor,
      }}
    >
      <div
        className="
          relative
          h-[550px]
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
        "
        style={{
          background: getGradient(),
          backgroundImage:
            imageEnabled && bgImage
              ? `url(${bgImage})`
              : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {showCard && (
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
}