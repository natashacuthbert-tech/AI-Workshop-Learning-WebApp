export default function Button({
  variant = "primary", 
  className = "",
  ...props
}) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`.trim();
  return <a className={cls} {...props} />;
}

