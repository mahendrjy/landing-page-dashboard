import { LandingPage } from "@/app/interfaces";
import { ColumnDef } from "@tanstack/react-table";
import { Cell, Header } from ".";

const Columns = {
  getLandingPagesUI,
};

interface LandingPagesArgs {
  fetching: boolean;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function getLandingPagesUI({
  fetching,
  onView,
  onEdit,
  onDelete,
}: LandingPagesArgs): ColumnDef<LandingPage>[] {
  return [
    {
      accessorKey: "title",
      header: ({ column }) => (
        <Header.SortButton column={column}>Title</Header.SortButton>
      ),
      cell: ({ row }) => <Cell.Title fetching={fetching} row={row} />,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <Cell.Description fetching={fetching} row={row} />,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <Header.SortButton column={column}>Status</Header.SortButton>
      ),
      cell: ({ row }) => <Cell.Status fetching={fetching} row={row} />,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <Cell.Actions
          fetching={fetching}
          row={row}
          onEdit={onEdit}
          onView={onView}
          onDelete={onDelete}
        />
      ),
    },
  ];
}

export default Columns;
