import Galaxy from "./Galaxy";

export default function GalaxyBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,

        overflow: "hidden",
        background: "black",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      >
        <Galaxy
          mouseInteraction={true}
          mouseRepulsion={true}
          density={3}
          glowIntensity={0.4}
          saturation={0.6}
          hueShift={220}
          rotationSpeed={0.15}
          transparent={false}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
