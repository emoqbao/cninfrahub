export default function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-b border-[#f0f0f0]">
      {children}
    </div>
  );
}