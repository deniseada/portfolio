export default function GoogleDriveVideo({ fileId, title = "Video" }) {
  return (
    <div
      style={{
        width: "100%",
        gridColumn: "1 / -1",
        aspectRatio: "16 / 9",
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        allow="autoplay"
        style={{
          position: "absolute",
          inset: "-11% 0 -8% 0",
          width: "100%",
          height: "119%",
          display: "block",
          border: "none",
        }}
        title={title}
      ></iframe>
    </div>
  );
}
