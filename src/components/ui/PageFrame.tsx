export default function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-[#f0f0f0]">
      {children}
    </div>
  );
}