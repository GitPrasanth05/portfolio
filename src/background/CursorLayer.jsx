export default function Cursor() {
    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                zIndex: 1
            }}
        >
            <canvas
                id="fluid"
                style={{
                    width: "100%",
                    height: "100%",
                    display: "block"
                }}
            />
        </div>
    );
}
