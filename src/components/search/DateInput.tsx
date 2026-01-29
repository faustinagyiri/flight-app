import * as React from "react";
import { Calendar } from "../ui/calendar";
import DateRangePicker from "./DateRangePicker";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../ui/popover";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";

export default function DateInput() {
  const [date, setDate] = React.useState<Date | undefined>();

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

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
        <DateRangePicker />
      </PopoverContent>
    </Popover>
  );
}


