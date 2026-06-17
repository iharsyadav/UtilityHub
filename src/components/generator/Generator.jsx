import { useState } from "react";
import Controls from "./Controls";
import Preview from "./Preview";
import Code from "./Code";
export default function Generator() {
  const [showCard, setShowCard] = useState(true);

  /* Preview Color */

  const [previewColor, setPreviewColor] = useState("#f5f5f5");

  /* Gradient */

  const [gradientEnabled, setGradientEnabled] = useState(true);

  const [gradientType, setGradientType] = useState("linear");

  const [gradientAngle, setGradientAngle] = useState(135);

  const [gradientColor1, setGradientColor1] = useState("#ff6b6b");

  const [gradientColor2, setGradientColor2] = useState("#845ef7");

  const [gradientColor3, setGradientColor3] = useState("#339af0");

  /* Image */

  const [imageEnabled, setImageEnabled] = useState(false);

  const [bgImage, setBgImage] = useState(null);

  /* Card */

  const [cardColor, setCardColor] = useState("#ffffff");

  return (
    <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
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
      />

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
        cardColor={cardColor}
        showCard={showCard}
      />
      <Code
        previewColor={previewColor}
        gradientEnabled={gradientEnabled}
        gradientType={gradientType}
        gradientAngle={gradientAngle}
        gradientColor1={gradientColor1}
        gradientColor2={gradientColor2}
        gradientColor3={gradientColor3}
        cardColor={cardColor}
      />
    </div>
  );
}
