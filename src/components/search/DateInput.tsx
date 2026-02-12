import * as React from "react";
import { Calendar } from "../ui/calendar";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../ui/popover";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

export default function DateInput() {
  const [date, setDate] = React.useState<Date | undefined>();

  
  fetch("http://127.0.0.1:7242/ingest/5203c23d-9d68-411f-9f87-ec569814e16c", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: `log_${Date.now()}_date_input_render`,
      timestamp: Date.now(),
      runId: "initial",
      hypothesisId: "H1_H2_H3",
      location: "src/components/search/DateInput.tsx:18",
      message: "DateInput rendered; checking how many calendars are shown",
      data: {
        hasRangePicker: true,
        numberOfMonthsSingle: 2,
      },
    }),
  }).catch(() => { });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer items-center gap-3 px-4">
          <CalendarDays className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-xs text-gray-500">Dates</p>
            <p className="text-sm font-medium text-gray-900">
              {date ? format(date, "MMM dd, yyyy") : "Select dates"}
            </p>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-auto" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />

      </PopoverContent>
    </Popover>
  );
}


