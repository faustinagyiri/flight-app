import * as React from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = DayPickerProps;

function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn("rounded-xl bg-white p-4", className)}
      classNames={{
        months:
          "flex flex-col gap-6 sm:flex-row sm:gap-8",
        month: "space-y-4",
        caption:
          "relative flex items-center justify-center",
        caption_label:
          "text-sm font-semibold text-gray-900",
        nav:
          "flex items-center gap-1",
        nav_button: cn(
          "h-8 w-8 rounded-md border border-gray-200 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
        ),
        nav_button_previous:
          "absolute left-1",
        nav_button_next:
          "absolute right-1",

        table:
          "w-full border-collapse",
        head_row:
          "flex justify-between",
        head_cell:
          "w-9 text-center text-xs font-medium text-gray-500",
        row:
          "mt-2 flex justify-between",

        cell:
          "relative h-9 w-9 text-center text-sm",

        day: cn(
          "h-9 w-9 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ),

        day_today:
          "border border-blue-500 text-blue-600",

        day_selected:
          "bg-blue-600 text-white hover:bg-blue-600 focus:bg-blue-600",

        day_range_start:
          "rounded-l-md bg-blue-600 text-white",

        day_range_end:
          "rounded-r-md bg-blue-600 text-white",

        day_range_middle:
          "bg-blue-100 text-blue-900",

        day_outside:
          "text-gray-400 opacity-50",

        day_disabled:
          "text-gray-300 opacity-40 cursor-not-allowed",

        day_hidden:
          "invisible",

        ...classNames,
      }}
      {...props}
    />
  );
}

export { Calendar };
