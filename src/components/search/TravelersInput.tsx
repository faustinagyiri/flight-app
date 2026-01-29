import { useState } from "react";
import { Users, Plus, Minus } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CounterProps {
  label: string;
  subtitle: string;
  value: number;
  setValue: (value: number) => void;
  min?: number;
}

function Counter({ label, subtitle, value, setValue, min = 0 }: CounterProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => value > min && setValue(value - 1)}
          className="rounded-full border p-1 hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </button>

        <span className="w-4 text-center">{value}</span>

        <button
          onClick={() => setValue(value + 1)}
          className="rounded-full border p-1 hover:bg-gray-100"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function TravelersInput() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [kids, setKids] = useState(0);

  return (
    <Popover>
      {/* TRIGGER */}
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer items-center gap-3 px-4">
          <Users className="h-5 w-5 text-gray-500" />
          <div>
            <p className="text-xs text-gray-500">Travelers</p>
            <p className="text-sm font-medium text-gray-900">
              {adults + children + kids} Travelers
            </p>
          </div>
        </div>
      </PopoverTrigger>

      {/* CONTENT */}
      <PopoverContent align="end" sideOffset={12} className="w-auto p-0">
        <Card className="w-75">
          <CardContent className="space-y-4 p-4">
            <Counter
              label="Adults"
              subtitle="12 years & above"
              value={adults}
              setValue={setAdults}
              min={1}
            />
            <Counter
              label="Children"
              subtitle="From 5 to under 12"
              value={children}
              setValue={setChildren}
            />
            <Counter
              label="Kids"
              subtitle="From 2 to under 5"
              value={kids}
              setValue={setKids}
            />
          </CardContent>

          <CardFooter className="flex justify-end p-4 pt-0">
            <Button size="sm">Apply</Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}


