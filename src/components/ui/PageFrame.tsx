export default function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-border-light">
      {children}
    </div>
  );
}
