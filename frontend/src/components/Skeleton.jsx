export function SkeletonLine({ width = "100%", height = 14 }) {
  return <div className="bb-skel-line" style={{ width, height }} />;
}

export function SkeletonCard() {
  return (
    <div className="bb-skel-card">
      <div className="bb-skel-avatar" />
      <div className="bb-skel-block">
        <div className="bb-skel-line" style={{ width: "70%", height: 16 }} />
        <div className="bb-skel-line" style={{ width: "90%", height: 12, marginTop: 10 }} />
        <div className="bb-skel-line" style={{ width: "80%", height: 12, marginTop: 8 }} />
      </div>
    </div>
  );
}

