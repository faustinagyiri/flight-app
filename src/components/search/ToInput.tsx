import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MapPin } from "lucide-react";

interface Location {
  city: string;
  country: string;
  code: string;
}

const LOCATIONS: Location[] = [
  { city: "Mumbai", country: "India", code: "BOM" },
  { city: "Accra", country: "Ghana", code: "ACC" },
  { city: "Oslo", country: "Norway", code: "OSL" },
  { city: "Shanghai", country: "China", code: "PVG" },
  { city: "Johannesburg", country: "South Africa", code: "JNB" },
];

export default function ToInput() {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* TRIGGER */}
      <PopoverTrigger asChild>
        <div
          onMouseEnter={() => setOpen(true)}
          className="flex flex-1 cursor-pointer flex-col gap-1 rounded-xl bg-white px-4 py-3 hover:bg-gray-50 md:rounded-none"
        >
          <span className="text-xs font-medium text-gray-500">To</span>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm font-semibold text-gray-900">China</span>
          </div>
        </div>
      </PopoverTrigger>

      {/* CONTENT */}
      <PopoverContent
        align="start"
        sideOffset={12}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="w-85 rounded-2xl p-4 shadow-xl"
      >
        <div className="space-y-3">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search city or airport"
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Location list */}
          <div className="max-h-64 space-y-1 overflow-y-auto">
            {LOCATIONS.map((item) => (
              <div
                key={item.code}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100"
              >
                <MapPin className="h-4 w-4 text-gray-400" />

                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {item.city}
                  </span>
                  <span className="text-xs text-gray-500">
                    {item.country} · {item.code}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}


