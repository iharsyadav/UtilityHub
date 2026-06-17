export default function GlassControls({
  blur,
  setBlur,

  opacity,
  setOpacity,

  radius,
  setRadius,

  cardColor,
  setCardColor,

  showCard,
  setShowCard,

  bgColor,
  setBgColor,

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

  setBgImage,
}) {
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setBgImage(
      URL.createObjectURL(file)
    );
  };

  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        sm:p-6
        shadow-sm
      "
    >
      <h2
        className="
          mb-6
          text-xl
          sm:text-2xl
          font-bold
        "
      >
        Controls
      </h2>

      <div className="space-y-6">
        {/* GLASS */}

        <div>
          <h3 className="mb-4 font-semibold">
            Glass
          </h3>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm">
                Blur ({blur}px)
              </label>

              <input
                type="range"
                min="0"
                max="50"
                value={blur}
                onChange={(e) =>
                  setBlur(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Opacity ({opacity})
              </label>

              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={opacity}
                onChange={(e) =>
                  setOpacity(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Radius ({radius}px)
              </label>

              <input
                type="range"
                min="0"
                max="80"
                value={radius}
                onChange={(e) =>
                  setRadius(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm">
                Glass Color
              </label>

              <input
                type="color"
                value={cardColor}
                onChange={(e) =>
                  setCardColor(
                    e.target.value
                  )
                }
                className="
                  h-12
                  w-full
                  cursor-pointer
                "
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setShowCard(
                  !showCard
                )
              }
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                py-3
                text-sm
                font-medium
                transition
                hover:bg-gray-100
              "
            >
              {showCard
                ? "Hide Glass Card"
                : "Show Glass Card"}
            </button>
          </div>
        </div>

        <hr />

        {/* BACKGROUND */}

        <div>
          <h3 className="mb-4 font-semibold">
            Background
          </h3>

          <label className="mb-2 block text-sm">
            Base Color
          </label>

          <input
            type="color"
            value={bgColor}
            onChange={(e) =>
              setBgColor(
                e.target.value
              )
            }
            className="
              h-12
              w-full
              cursor-pointer
            "
          />
        </div>

        <hr />

        {/* GRADIENT */}

        <div>
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >
            <h3 className="font-semibold">
              Gradient Layer
            </h3>

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
            <div className="space-y-4">
              <select
                value={gradientType}
                onChange={(e) =>
                  setGradientType(
                    e.target.value
                  )
                }
                className="
                  w-full
                  rounded-xl
                  border
                  p-3
                "
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
                <label className="mb-2 block text-sm">
                  Angle ({gradientAngle}°)
                </label>

                <input
                  type="range"
                  min="0"
                  max="360"
                  value={gradientAngle}
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

              <input
                type="color"
                value={gradientColor1}
                onChange={(e) =>
                  setGradientColor1(
                    e.target.value
                  )
                }
                className="h-12 w-full"
              />

              <input
                type="color"
                value={gradientColor2}
                onChange={(e) =>
                  setGradientColor2(
                    e.target.value
                  )
                }
                className="h-12 w-full"
              />

              <input
                type="color"
                value={gradientColor3}
                onChange={(e) =>
                  setGradientColor3(
                    e.target.value
                  )
                }
                className="h-12 w-full"
              />
            </div>
          )}
        </div>

        <hr />

        {/* IMAGE */}

        <div>
          <div
            className="
              mb-4
              flex
              items-center
              justify-between
            "
          >
            <h3 className="font-semibold">
              Image Layer
            </h3>

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
            <label
              className="
                flex
                min-h-[52px]
                w-full
                cursor-pointer
                items-center
                justify-center
                rounded-xl
                border
                border-dashed
                border-gray-300
                px-4
                text-center
              "
            >
              Upload Image

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