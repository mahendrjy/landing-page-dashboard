import { DataTable, SortButton, StatusCell } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ColumnDef } from "@tanstack/react-table";
import { LandingPage } from "../app/interfaces";

export default function LandingPagesList({
  landingPages,
  fetching,
  onView,
  onEdit,
  onDelete,
}: {
  landingPages: LandingPage[];
  fetching: boolean;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const columns = fetching
    ? getSkeletonColumns()
    : getColumns({ onView, onEdit, onDelete });

  return (
    <DataTable
      data={landingPages}
      columns={columns}
      searchPlaceholder="Search Landing Page..."
    />
  );
}

function getSkeletonColumns(): ColumnDef<LandingPage>[] {
  return [
    {
      accessorKey: "title",
      header: ({ column }) => <SortButton column={column}>Title</SortButton>,
      cell: () => <Skeleton className="w-56 h-8" />,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: () => <Skeleton className="w-56 h-8" />,
    },
    {
      accessorKey: "status",
      header: ({ column }) => <SortButton column={column}>Status</SortButton>,
      cell: () => <Skeleton className="w-16 h-8" />,
    },

    {
      id: "actions",
      enableHiding: false,
      cell: () => {
        return (
          <div className="flex gap-4 justify-end">
            <Button variant="secondary" className="text-transparent">
              Edit
            </Button>
            <Button variant="secondary" className="text-transparent">
              View
            </Button>
            <Button variant="secondary" className="text-transparent">
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
}

function getColumns({
  onView,
  onEdit,
  onDelete,
}: {
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}): ColumnDef<LandingPage>[] {
  return [
    {
      accessorKey: "title",
      header: ({ column }) => <SortButton column={column}>Title</SortButton>,
      cell: ({ row }) => <div className="w-56">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="w-56">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: ({ column }) => <SortButton column={column}>Status</SortButton>,
      cell: StatusCell,
    },

    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <div className="flex gap-4 justify-end">
            <Button variant="secondary" onClick={() => onEdit(row.original.id)}>
              Edit
            </Button>
            <Button variant="default" onClick={() => onView(row.original.id)}>
              View
            </Button>
            <Button
              variant="destructive"
              onClick={() => onDelete(row.original.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];
}
