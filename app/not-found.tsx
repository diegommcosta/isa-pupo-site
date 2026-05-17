export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-bege font-sans"
      style={{ background: "#EDBF9F" }}
    >
      <div className="flex items-center gap-6 text-marrom" style={{ color: "#2D1605" }}>
        <span className="text-[2rem] font-bold font-sans">404</span>
        <span className="w-px h-10 bg-current opacity-40" />
        <span className="text-[1rem] font-sans">Esta página não foi encontrada.</span>
      </div>
    </div>
  );
}
