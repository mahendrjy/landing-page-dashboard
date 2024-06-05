import { Row } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

const Cell = {
  Title,
  Description,
  Status,
  Actions,
};

function Title<T>({ row, fetching }: { row: Row<T>; fetching: boolean }) {
  if (fetching) return <Skeleton className="w-56 h-8" />;
  return <div className="w-56">{row.getValue("title")}</div>;
}

function Description<T>({ row, fetching }: { row: Row<T>; fetching: boolean }) {
  if (fetching) return <Skeleton className="w-56 h-8" />;
  return <div className="w-56">{row.getValue("description")}</div>;
}

function Status<T>({ row, fetching }: { row: Row<T>; fetching: boolean }) {
  if (fetching) return <Skeleton className="w-16 h-8" />;

  return (
    <div className={`capitalize`}>
      <Badge
        variant={row.getValue("status") === "live" ? "success" : "warning"}
      >
        {row.getValue("status")}
      </Badge>
    </div>
  );
}

function Actions<T extends { id: string }>({
  row,
  onEdit,
  onView,
  onDelete,
  fetching,
}: {
  row: Row<T>;
  onEdit: (id: string) => void;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
  fetching: boolean;
}) {
  return (
    <div className="flex gap-4 justify-end">
      <Button
        variant="secondary"
        disabled={fetching}
        onClick={() => onEdit(row.original.id)}
        className={fetching ? "text-transparent cursor-default" : ""}
      >
        Edit
      </Button>
      <Button
        variant={fetching ? "secondary" : "default"}
        disabled={fetching}
        onClick={() => onView(row.original.id)}
        className={fetching ? "text-transparent cursor-default" : ""}
      >
        View
      </Button>
      <Button
        variant={fetching ? "secondary" : "destructive"}
        disabled={fetching}
        onClick={() => onDelete(row.original.id)}
        className={fetching ? "text-transparent cursor-default" : ""}
      >
        Delete
      </Button>
    </div>
  );
}

export default Cell;
