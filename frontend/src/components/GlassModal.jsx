import { useEffect } from "react";

export default function GlassModal({
  open,
  title,
  onClose,
  children,
  footer,
  width = "720px",
}) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="bb-modal-root" role="dialog" aria-modal="true">
      <div className="bb-modal-backdrop" onClick={onClose} />
      <div className="bb-modal" style={{ maxWidth: width }}>
        <div className="bb-modal-header">
          <div className="bb-modal-title">{title}</div>
          <button className="bb-icon-btn" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>
        <div className="bb-modal-body">{children}</div>
        {footer ? <div className="bb-modal-footer">{footer}</div> : null}
      </div>
    </div>
  );
}

