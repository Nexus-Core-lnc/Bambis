export default function SectionTitle({
  label,
  title,
  align = "center",
}: {
  label: string;
  title: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-bambis-gold">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
    </div>
  );
}