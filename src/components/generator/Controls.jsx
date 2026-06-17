export default function Controls({
  showCard,
  setShowCard,

  previewColor,
  setPreviewColor,

  gradientEnabled,
  setGradientEnabled,

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

  imageEnabled,
  setImageEnabled,

  cardColor,
  setCardColor,

  setBgImage,
}) {
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setBgImage(URL.createObjectURL(file));
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold">
          Controls
        </h2>

        <button
          type="button"
          onClick={() =>
            setShowCard(!showCard)
          }
          className="rounded-md border px-2 py-1 text-xs"
        >
          {showCard
            ? "Hide"
            : "Show"}
        </button>
      </div>

      <div className="space-y-3">
        {/* COLORS */}

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="mb-1 block text-xs font-medium">
              Preview
            </label>

            <input
              type="color"
              value={previewColor}
              onChange={(e) =>
                setPreviewColor(
                  e.target.value
                )
              }
              className="h-8 w-full cursor-pointer"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium">
              Card
            </label>

            <input
              type="color"
              value={cardColor}
              onChange={(e) =>
                setCardColor(
                  e.target.value
                )
              }
              className="h-8 w-full cursor-pointer"
            />
          </div>
        </div>

        {/* GRADIENT */}

        <div className="rounded-lg border p-2">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium">
              Gradient
            </span>

            <input
              type="checkbox"
              checked={gradientEnabled}
              onChange={(e) =>
                setGradientEnabled(
                  e.target.checked
                )
              }
            />
          </div>

          {gradientEnabled && (
            <div className="space-y-2">
              <select
                value={gradientType}
                onChange={(e) =>
                  setGradientType(
                    e.target.value
                  )
                }
                className="w-full rounded border p-1 text-xs"
              >
                <option value="linear">
                  Linear
                </option>

                <option value="radial">
                  Radial
                </option>

                <option value="conic">
                  Conic
                </option>
              </select>

              <div>
                <div className="mb-1 flex justify-between text-xs">
                  <span>Angle</span>

                  <span>
                    {gradientAngle}°
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="360"
                  value={
                    gradientAngle
                  }
                  onChange={(e) =>
                    setGradientAngle(
                      Number(
                        e.target.value
                      )
                    )
                  }
                  className="w-full"
                />
              </div>

              <div className="grid grid-cols-3 gap-1">
                <input
                  type="color"
                  value={
                    gradientColor1
                  }
                  onChange={(e) =>
                    setGradientColor1(
                      e.target.value
                    )
                  }
                  className="h-8 w-full"
                />

                <input
                  type="color"
                  value={
                    gradientColor2
                  }
                  onChange={(e) =>
                    setGradientColor2(
                      e.target.value
                    )
                  }
                  className="h-8 w-full"
                />

                <input
                  type="color"
                  value={
                    gradientColor3
                  }
                  onChange={(e) =>
                    setGradientColor3(
                      e.target.value
                    )
                  }
                  className="h-8 w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* IMAGE */}

        <div className="rounded-lg border p-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">
              Image
            </span>

            <input
              type="checkbox"
              checked={imageEnabled}
              onChange={(e) =>
                setImageEnabled(
                  e.target.checked
                )
              }
            />
          </div>

          {imageEnabled && (
            <label className="mt-2 flex h-8 cursor-pointer items-center justify-center rounded border border-dashed text-xs">
              Upload

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleImageUpload
                }
                className="hidden"
              />
            </label>
          )}
        </div>
      </div>
    </div>
  );
}