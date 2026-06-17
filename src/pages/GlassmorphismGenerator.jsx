import { useState } from "react";

import GlassControls from "../components/glassmorphism/GlassControls";
import GlassPreview from "../components/glassmorphism/GlassPreview";
import GlassCode from "../components/glassmorphism/GlassCode";

export default function GlassmorphismGenerator() {
  // Glass

  const [blur, setBlur] = useState(20);
  const [opacity, setOpacity] = useState(0.2);
  const [radius, setRadius] = useState(32);

  const [cardColor, setCardColor] =
    useState("#ffffff");

  const [showCard, setShowCard] =
    useState(true);

  // Background Layer

  const [bgColor, setBgColor] =
    useState("#0f172a");

  // Gradient Layer

  const [gradientEnabled, setGradientEnabled] =
    useState(true);

  const [gradientType, setGradientType] =
    useState("linear");

  const [gradientAngle, setGradientAngle] =
    useState(135);

  const [gradientColor1, setGradientColor1] =
    useState("#ff6b6b");

  const [gradientColor2, setGradientColor2] =
    useState("#8b5cf6");

  const [gradientColor3, setGradientColor3] =
    useState("#06b6d4");

  // Image Layer

  const [imageEnabled, setImageEnabled] =
    useState(false);

  const [bgImage, setBgImage] =
    useState(null);

  return (
    <div
      className="
        mx-auto
        max-w-7xl
        space-y-6
        p-4
        sm:p-6
        lg:p-8
      "
    >
      <h1
        className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-black
        "
      >
        Glassmorphism Generator
      </h1>

      <div
        className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-[360px_1fr]
        "
      >
        <GlassControls
          blur={blur}
          setBlur={setBlur}
          opacity={opacity}
          setOpacity={setOpacity}
          radius={radius}
          setRadius={setRadius}
          cardColor={cardColor}
          setCardColor={setCardColor}
          showCard={showCard}
          setShowCard={setShowCard}
          bgColor={bgColor}
          setBgColor={setBgColor}
          gradientEnabled={gradientEnabled}
          setGradientEnabled={setGradientEnabled}
          gradientType={gradientType}
          setGradientType={setGradientType}
          gradientAngle={gradientAngle}
          setGradientAngle={setGradientAngle}
          gradientColor1={gradientColor1}
          setGradientColor1={setGradientColor1}
          gradientColor2={gradientColor2}
          setGradientColor2={setGradientColor2}
          gradientColor3={gradientColor3}
          setGradientColor3={setGradientColor3}
          imageEnabled={imageEnabled}
          setImageEnabled={setImageEnabled}
          bgImage={bgImage}
          setBgImage={setBgImage}
        />

        <GlassPreview
          blur={blur}
          opacity={opacity}
          radius={radius}
          cardColor={cardColor}
          showCard={showCard}
          bgColor={bgColor}
          gradientEnabled={gradientEnabled}
          gradientType={gradientType}
          gradientAngle={gradientAngle}
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
          gradientColor3={gradientColor3}
          imageEnabled={imageEnabled}
          bgImage={bgImage}
        />
      </div>

      <GlassCode
        blur={blur}
        opacity={opacity}
        radius={radius}
        cardColor={cardColor}
        bgColor={bgColor}
        gradientEnabled={gradientEnabled}
        gradientType={gradientType}
        gradientAngle={gradientAngle}
        gradientColor1={gradientColor1}
        gradientColor2={gradientColor2}
        gradientColor3={gradientColor3}
      />
    </div>
  );
}