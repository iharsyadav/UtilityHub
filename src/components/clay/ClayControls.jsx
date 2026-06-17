export default function ClayControls({
  radius,
  setRadius,
  cardGradientEnabled,
  setCardGradientEnabled,
  gradientType,
  setGradientType,
  gradientAngle,
  setGradientAngle,
  gradientColor1,
  setGradientColor1,
  gradientColor2,
  setGradientColor2,

  gradientColor3,
  setGradientColor3,

  darkShadowX,
  setDarkShadowX,
  darkShadowY,
  setDarkShadowY,
  darkShadowBlur,
  setDarkShadowBlur,
  darkShadowOpacity,
  setDarkShadowOpacity,

  lightShadowX,
  setLightShadowX,
  lightShadowY,
  setLightShadowY,
  lightShadowBlur,
  setLightShadowBlur,
  lightShadowOpacity,
  setLightShadowOpacity,

  innerLightOpacity,
  setInnerLightOpacity,
  innerDarkOpacity,
  setInnerDarkOpacity,

  innerLightX,
  setInnerLightX,
  innerLightY,
  setInnerLightY,
  innerLightBlur,
  setInnerLightBlur,

  innerDarkX,
  setInnerDarkX,
  innerDarkY,
  setInnerDarkY,
  innerDarkBlur,
  setInnerDarkBlur,

  darkShadowColor,
  setDarkShadowColor,

  lightShadowColor,
  setLightShadowColor,

  innerLightColor,
  setInnerLightColor,

  innerDarkColor,
  setInnerDarkColor,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Clay Controls</h2>
      {/* Radius */}
      <div className="mb-4">
        <div className="mb-1 flex justify-between text-xs">
          <span>Radius</span>
          <span>{radius}px</span>
        </div>

        <input
          type="range"
          min="0"
          max="80"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-full"
        />
      </div>{" "}
      {/* OUTER SHADOWS */}
      <div className="mb-4 rounded-lg border p-3">
        <h3 className="mb-3 text-sm font-semibold">Outer Shadows</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Dark */}

          <div>
            <p className="mb-2 text-xs font-medium">Dark</p>

            <input
              type="color"
              value={darkShadowColor}
              onChange={(e) => setDarkShadowColor(e.target.value)}
              className="mb-2 h-8 w-full"
            />

            <label className="text-xs">Opacity {darkShadowOpacity}</label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={darkShadowOpacity}
              onChange={(e) => setDarkShadowOpacity(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">X {darkShadowX}</label>

            <input
              type="range"
              min="-40"
              max="40"
              value={darkShadowX}
              onChange={(e) => setDarkShadowX(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Y {darkShadowY}</label>

            <input
              type="range"
              min="-40"
              max="40"
              value={darkShadowY}
              onChange={(e) => setDarkShadowY(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Blur {darkShadowBlur}</label>

            <input
              type="range"
              min="0"
              max="80"
              value={darkShadowBlur}
              onChange={(e) => setDarkShadowBlur(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Light */}

          <div>
            <p className="mb-2 text-xs font-medium">Light</p>

            <input
              type="color"
              value={lightShadowColor}
              onChange={(e) => setLightShadowColor(e.target.value)}
              className="mb-2 h-8 w-full"
            />

            <label className="text-xs">Opacity {lightShadowOpacity}</label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={lightShadowOpacity}
              onChange={(e) => setLightShadowOpacity(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">X {lightShadowX}</label>

            <input
              type="range"
              min="-40"
              max="40"
              value={lightShadowX}
              onChange={(e) => setLightShadowX(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Y {lightShadowY}</label>

            <input
              type="range"
              min="-40"
              max="40"
              value={lightShadowY}
              onChange={(e) => setLightShadowY(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Blur {lightShadowBlur}</label>

            <input
              type="range"
              min="0"
              max="80"
              value={lightShadowBlur}
              onChange={(e) => setLightShadowBlur(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* INNER SHADOWS */}
      <div className="rounded-lg border p-3">
        <h3 className="mb-3 text-sm font-semibold">Inner Shadows</h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Inner Light */}

          <div>
            <p className="mb-2 text-xs font-medium">Inner Light</p>

            <input
              type="color"
              value={innerLightColor}
              onChange={(e) => setInnerLightColor(e.target.value)}
              className="mb-2 h-8 w-full"
            />

            <label className="text-xs">Opacity {innerLightOpacity}</label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={innerLightOpacity}
              onChange={(e) => setInnerLightOpacity(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">X {innerLightX}</label>

            <input
              type="range"
              min="-20"
              max="20"
              value={innerLightX}
              onChange={(e) => setInnerLightX(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Y {innerLightY}</label>

            <input
              type="range"
              min="-20"
              max="20"
              value={innerLightY}
              onChange={(e) => setInnerLightY(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Blur {innerLightBlur}</label>

            <input
              type="range"
              min="0"
              max="40"
              value={innerLightBlur}
              onChange={(e) => setInnerLightBlur(Number(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Inner Dark */}

          <div>
            <p className="mb-2 text-xs font-medium">Inner Dark</p>

            <input
              type="color"
              value={innerDarkColor}
              onChange={(e) => setInnerDarkColor(e.target.value)}
              className="mb-2 h-8 w-full"
            />

            <label className="text-xs">Opacity {innerDarkOpacity}</label>

            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={innerDarkOpacity}
              onChange={(e) => setInnerDarkOpacity(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">X {innerDarkX}</label>

            <input
              type="range"
              min="-20"
              max="20"
              value={innerDarkX}
              onChange={(e) => setInnerDarkX(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Y {innerDarkY}</label>

            <input
              type="range"
              min="-20"
              max="20"
              value={innerDarkY}
              onChange={(e) => setInnerDarkY(Number(e.target.value))}
              className="w-full"
            />

            <label className="text-xs">Blur {innerDarkBlur}</label>

            <input
              type="range"
              min="0"
              max="40"
              value={innerDarkBlur}
              onChange={(e) => setInnerDarkBlur(Number(e.target.value))}
              className="w-full"
            />
          </div>
          {/* CARD BACKGROUND */}
          <div className="mb-4 rounded-lg border p-3">
            <h3 className="mb-3 text-sm font-semibold">Card Background</h3>

            <label className="mb-3 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={cardGradientEnabled}
                onChange={(e) => setCardGradientEnabled(e.target.checked)}
              />
              Enable Gradient
            </label>

            {cardGradientEnabled && (
              <>
                <div className="mb-3">
                  <label className="mb-1 block text-xs">Gradient Type</label>

                  <select
                    value={gradientType}
                    onChange={(e) => setGradientType(e.target.value)}
                    className="w-full rounded border p-2 text-sm"
                  >
                    <option value="linear">Linear</option>

                    <option value="radial">Radial</option>

                    <option value="conic">Conic</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="text-xs">Angle {gradientAngle}°</label>

                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={gradientAngle}
                    onChange={(e) => setGradientAngle(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="color"
                    value={gradientColor1}
                    onChange={(e) => setGradientColor1(e.target.value)}
                    className="h-10 w-full"
                  />

                  <input
                    type="color"
                    value={gradientColor2}
                    onChange={(e) => setGradientColor2(e.target.value)}
                    className="h-10 w-full"
                  />

                  <input
                    type="color"
                    value={gradientColor3}
                    onChange={(e) => setGradientColor3(e.target.value)}
                    className="h-10 w-full"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
