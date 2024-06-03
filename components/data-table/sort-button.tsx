import { CaretSortIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

function SortButton({
  column,
  children,
}: {
  column: any;
  children: React.ReactNode;
}) {
  return (
    <Button
      className="p-0"
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
      <CaretSortIcon className="ml-2 h-4 w-4" />
    </Button>
  );
}

export default SortButton;
