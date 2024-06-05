import { cn } from "@/lib/utils";

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-7xl sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
