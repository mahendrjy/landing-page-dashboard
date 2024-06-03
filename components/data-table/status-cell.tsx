import { Badge } from "@/components/ui/badge";

function StatusCell({ row }: { row: any }) {
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

export default StatusCell;
