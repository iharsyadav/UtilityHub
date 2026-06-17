export default function GlassPreview({
  blur,
  opacity,
  radius,

  cardColor,

  showCard,

  bgColor,

  gradientEnabled,
  gradientType,
  gradientAngle,

  gradientColor1,
  gradientColor2,
  gradientColor3,

  imageEnabled,
  bgImage,
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

  const getGradient = () => {
    if (!gradientEnabled) return null;

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
        relative
        h-[350px]
        sm:h-[450px]
        lg:h-[520px]
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
      "
    >
      {/* BASE COLOR */}

      <div
        className="absolute inset-0"
        style={{
          background: bgColor,
        }}
      />

      {/* GRADIENT LAYER */}

      {gradientEnabled && (
        <div
          className="absolute inset-0"
          style={{
            background: getGradient(),
            opacity: 0.85,
          }}
        />
      )}

      {/* IMAGE LAYER */}

      {imageEnabled && bgImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
          }}
        />
      )}

      {/* GLASS CARD */}

      {showCard && (
        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[180px]
            sm:h-[220px]
            lg:h-[240px]

            w-[90%]
            max-w-[340px]

            -translate-x-1/2
            -translate-y-1/2

            overflow-hidden

            border
            border-white/20
          "
          style={{
            background: `rgba(
              ${rgb.r},
              ${rgb.g},
              ${rgb.b},
              ${opacity}
            )`,

            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,

            borderRadius: `${radius}px`,

            boxShadow: `
              0 8px 24px rgba(0,0,0,.12),
              inset 0 1px 0 rgba(255,255,255,.5)
            `,
          }}
        >
          {/* TOP HIGHLIGHT */}

          <div
            className="
              absolute
              left-0
              top-0
              h-[1px]
              w-full
            "
            style={{
              background:
                "linear-gradient(90deg,transparent,rgba(255,255,255,.9),transparent)",
            }}
          />

          {/* LEFT HIGHLIGHT */}

          <div
            className="
              absolute
              left-0
              top-0
              h-full
              w-[1px]
            "
            style={{
              background:
                "linear-gradient(180deg,rgba(255,255,255,.8),transparent)",
            }}
          />

          {/* SHINE EFFECT */}

          <div
            className="
              absolute
              -left-10
              -top-10

              h-24
              w-24

              sm:h-28
              sm:w-28

              lg:h-32
              lg:w-32

              rounded-full
              blur-3xl
            "
            style={{
              background:
                "rgba(255,255,255,.25)",
            }}
          />

          {/* CONTENT */}

          <div
            className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              px-6
              text-center
            "
          >
            <h2
              className="
                text-xl
                font-bold
                text-white

                sm:text-2xl

                lg:text-3xl
              "
            >
              Glass Card
            </h2>

            <p
              className="
                mt-2
                text-xs
                text-white/80

                sm:text-sm
              "
            >
              Live Preview
            </p>
          </div>
        </div>
      )}
    </div>
  );
}