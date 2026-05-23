export default function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-b border-[#e8eaed]">
      {children}
    </div>
  );
}