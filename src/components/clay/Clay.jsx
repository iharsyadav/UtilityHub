import { useState } from "react";

import Controls from "../generator/Controls";
import Preview from "../generator/Preview";
import Code from "../generator/Code";

import ClayControls from "./ClayControls";
import ClayCard from "./ClayCard";

const Clay = () => {
  /* COMMON */

  const [showCard, setShowCard] = useState(true);

  const [previewColor, setPreviewColor] = useState("#f5f5f5");

  const [darkShadowColor, setDarkShadowColor] = useState("#78648c");

  const [lightShadowColor, setLightShadowColor] = useState("#ffffff");

  const [innerLightColor, setInnerLightColor] = useState("#ffffff");

  const [innerDarkColor, setInnerDarkColor] = useState("#78648c");

  /* PREVIEW GRADIENT */

  const [gradientEnabled, setGradientEnabled] = useState(true);

  const [gradientType, setGradientType] = useState("linear");

  const [gradientAngle, setGradientAngle] = useState(135);

  const [gradientColor1, setGradientColor1] = useState("#ff6b6b");

  const [gradientColor2, setGradientColor2] = useState("#845ef7");

  const [gradientColor3, setGradientColor3] = useState("#339af0");

  /* CARD GRADIENT */

  const [cardGradientEnabled, setCardGradientEnabled] = useState(false);

  /* IMAGE */

  const [imageEnabled, setImageEnabled] = useState(false);

  const [bgImage, setBgImage] = useState(null);

  /* CARD */

  const [cardColor, setCardColor] = useState("#ffd7e7");

  /* CLAY */

  const [radius, setRadius] = useState(0);

  /* OUTER DARK SHADOW */

  const [darkShadowX, setDarkShadowX] = useState(0);

  const [darkShadowY, setDarkShadowY] = useState(0);

  const [darkShadowBlur, setDarkShadowBlur] = useState(0);

  const [darkShadowOpacity, setDarkShadowOpacity] = useState(0);

  /* OUTER LIGHT SHADOW */

  const [lightShadowX, setLightShadowX] = useState(0);

  const [lightShadowY, setLightShadowY] = useState(0);

  const [lightShadowBlur, setLightShadowBlur] = useState(0);

  const [lightShadowOpacity, setLightShadowOpacity] = useState(0);

  /* INNER SHADOWS */

  const [innerLightOpacity, setInnerLightOpacity] = useState(0);

  const [innerDarkOpacity, setInnerDarkOpacity] = useState(0);

  const [innerLightX, setInnerLightX] = useState(0);

  const [innerLightY, setInnerLightY] = useState(0);

  const [innerLightBlur, setInnerLightBlur] = useState(0);

  const [innerDarkX, setInnerDarkX] = useState(0);

  const [innerDarkY, setInnerDarkY] = useState(0);

  const [innerDarkBlur, setInnerDarkBlur] = useState(0);

  return (
    <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
      <div className="space-y-6">
        <ClayControls
          radius={radius}
          setRadius={setRadius}
          cardGradientEnabled={cardGradientEnabled}
          setCardGradientEnabled={setCardGradientEnabled}
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
          darkShadowX={darkShadowX}
          setDarkShadowX={setDarkShadowX}
          darkShadowY={darkShadowY}
          setDarkShadowY={setDarkShadowY}
          darkShadowBlur={darkShadowBlur}
          setDarkShadowBlur={setDarkShadowBlur}
          darkShadowOpacity={darkShadowOpacity}
          setDarkShadowOpacity={setDarkShadowOpacity}
          lightShadowX={lightShadowX}
          setLightShadowX={setLightShadowX}
          lightShadowY={lightShadowY}
          setLightShadowY={setLightShadowY}
          lightShadowBlur={lightShadowBlur}
          setLightShadowBlur={setLightShadowBlur}
          lightShadowOpacity={lightShadowOpacity}
          setLightShadowOpacity={setLightShadowOpacity}
          innerLightOpacity={innerLightOpacity}
          setInnerLightOpacity={setInnerLightOpacity}
          innerDarkOpacity={innerDarkOpacity}
          setInnerDarkOpacity={setInnerDarkOpacity}
          innerLightX={innerLightX}
          setInnerLightX={setInnerLightX}
          innerLightY={innerLightY}
          setInnerLightY={setInnerLightY}
          innerLightBlur={innerLightBlur}
          setInnerLightBlur={setInnerLightBlur}
          innerDarkX={innerDarkX}
          setInnerDarkX={setInnerDarkX}
          innerDarkY={innerDarkY}
          setInnerDarkY={setInnerDarkY}
          innerDarkBlur={innerDarkBlur}
          setInnerDarkBlur={setInnerDarkBlur}
          darkShadowColor={darkShadowColor}
          setDarkShadowColor={setDarkShadowColor}
          lightShadowColor={lightShadowColor}
          setLightShadowColor={setLightShadowColor}
          innerLightColor={innerLightColor}
          setInnerLightColor={setInnerLightColor}
          innerDarkColor={innerDarkColor}
          setInnerDarkColor={setInnerDarkColor}
        />

        <Controls
          showCard={showCard}
          setShowCard={setShowCard}
          previewColor={previewColor}
          setPreviewColor={setPreviewColor}
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
          cardColor={cardColor}
          setCardColor={setCardColor}
          setBgImage={setBgImage}
          cardGradientEnabled={cardGradientEnabled}
          setCardGradientEnabled={setCardGradientEnabled}
        />
      </div>

      <div className="space-y-6">
        <Preview
          previewColor={previewColor}
          gradientEnabled={gradientEnabled}
          gradientType={gradientType}
          gradientAngle={gradientAngle}
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
          gradientColor3={gradientColor3}
          imageEnabled={imageEnabled}
          bgImage={bgImage}
          showCard={showCard}
        >
          <ClayCard
            cardColor={cardColor}
            cardGradientEnabled={cardGradientEnabled}
            gradientType={gradientType}
            gradientAngle={gradientAngle}
            gradientColor1={gradientColor1}
            gradientColor2={gradientColor2}
            gradientColor3={gradientColor3}
            radius={radius}
            darkShadowX={darkShadowX}
            darkShadowY={darkShadowY}
            darkShadowBlur={darkShadowBlur}
            darkShadowOpacity={darkShadowOpacity}
            lightShadowX={lightShadowX}
            lightShadowY={lightShadowY}
            lightShadowBlur={lightShadowBlur}
            lightShadowOpacity={lightShadowOpacity}
            innerLightOpacity={innerLightOpacity}
            innerDarkOpacity={innerDarkOpacity}
            innerLightX={innerLightX}
            innerLightY={innerLightY}
            innerLightBlur={innerLightBlur}
            innerDarkX={innerDarkX}
            innerDarkY={innerDarkY}
            innerDarkBlur={innerDarkBlur}
            darkShadowColor={darkShadowColor}
            lightShadowColor={lightShadowColor}
            innerLightColor={innerLightColor}
            innerDarkColor={innerDarkColor}
          />
        </Preview>

        <Code
          cardGradientEnabled={cardGradientEnabled}
          previewColor={previewColor}
          gradientEnabled={gradientEnabled}
          gradientType={gradientType}
          gradientAngle={gradientAngle}
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
          gradientColor3={gradientColor3}
          cardColor={cardColor}
          radius={radius}
          darkShadowX={darkShadowX}
          darkShadowY={darkShadowY}
          darkShadowBlur={darkShadowBlur}
          darkShadowOpacity={darkShadowOpacity}
          lightShadowX={lightShadowX}
          lightShadowY={lightShadowY}
          lightShadowBlur={lightShadowBlur}
          lightShadowOpacity={lightShadowOpacity}
          innerLightX={innerLightX}
          innerLightY={innerLightY}
          innerLightBlur={innerLightBlur}
          innerLightOpacity={innerLightOpacity}
          innerDarkX={innerDarkX}
          innerDarkY={innerDarkY}
          innerDarkBlur={innerDarkBlur}
          innerDarkOpacity={innerDarkOpacity}
          darkShadowColor={darkShadowColor}
          lightShadowColor={lightShadowColor}
          innerLightColor={innerLightColor}
          innerDarkColor={innerDarkColor}
        />
      </div>
    </div>
  );
};

export default Clay;
