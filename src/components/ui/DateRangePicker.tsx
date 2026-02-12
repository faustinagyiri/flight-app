import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";

export default function DateRangePicker() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 5, 12),
    to: new Date(2025, 6, 15),
  });

  // #region agent log
  fetch("http://127.0.0.1:7242/ingest/5203c23d-9d68-411f-9f87-ec569814e16c", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: `log_${Date.now()}_date_range_picker_render`,
      timestamp: Date.now(),
      runId: "initial",
      hypothesisId: "H2",
      location: "src/components/ui/DateRangePicker.tsx:13",
      message: "DateRangePicker rendered; this is an additional calendar instance",
      data: {
        hasDateRange: Boolean(dateRange),
        numberOfMonthsRange: 2,
      },
    }),
  }).catch(() => {});
  // #endregion agent log

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border shadow-sm"
    />
  );
}


