import { Columns, DataTable } from "@/components/data-table";
import { LandingPage } from "@/app/interfaces";

interface LandingPagesListProps {
  landingPages: LandingPage[];
  fetching: boolean;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

function LandingPageList({
  landingPages,
  fetching,
  onView,
  onEdit,
  onDelete,
}: LandingPagesListProps) {
  const columns = Columns.getLandingPagesUI({
    fetching,
    onView,
    onEdit,
    onDelete,
  });

  return (
    <DataTable
      data={landingPages}
      columns={columns}
      searchPlaceholder="Search Landing Page..."
      noResultsText="No landing pages."
    />
  );
}

export default LandingPageList;
