export default function GoogleDriveVideo({ fileId, title = "Video" }) {
  return (
    <div
      style={{
        width: "100%",
        gridColumn: "1 / -1",
        aspectRatio: "16 / 9",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <iframe
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        width="100%"
        height="100%"
        allow="autoplay"
        style={{
          border: "none",
          display: "block",
        }}
        title={title}
      ></iframe>
    </div>
  );
}
