import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Props = {
  airline: string;
  airlineLogo: string;
  from: string;
  to: string;
  departTime: string;
  departDate: string;
  departDay: string;
  departAirport: string;
  arriveTime: string;
  arriveDate: string;
  arriveDay: string;
  arriveAirport: string;
  duration: string;
  type: string;
  price: string;
  refundable: boolean;
};

export default function FlightResultCard({
  airline,
  airlineLogo,
  from,
  to,
  departTime,
  departDate,
  departDay,
  departAirport,
  arriveTime,
  arriveDate,
  arriveDay,
  arriveAirport,
  duration,
  type,
  price,
  refundable,
}: Props) {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate("/payment");
  };

  return (
    <Card className="group border bg-red-50 transition hover:shadow-lg">
      <CardContent className="p-6">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* Airline Info */}
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{airlineLogo}</div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {airline}
                </p>
                <p className="text-xs text-gray-500">
                  {from} → {to}
                </p>
              </div>
            </div>
          </div>

          {/* Departure */}
          <div className="col-span-3">
            <p className="text-lg font-semibold text-gray-900">
              {departTime}
            </p>
            <p className="text-xs text-gray-600">
              {departDate}, {departDay}
            </p>
            <p className="text-xs text-gray-500 mt-1">{departAirport}</p>
          </div>

          {/* Duration & Type */}
          <div className="col-span-2 text-center">
            <p className="text-sm font-medium text-gray-700">{duration}</p>
            <div className="mt-1">
              <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                {type}
              </span>
            </div>
          </div>

          {/* Arrival */}
          <div className="col-span-3">
            <p className="text-lg font-semibold text-gray-900">
              {arriveTime}
            </p>
            <p className="text-xs text-gray-600">
              {arriveDate}, {arriveDay}
            </p>
            <p className="text-xs text-gray-500 mt-1">{arriveAirport}</p>
          </div>

          {/* Price & Select */}
          <div className="col-span-2 flex flex-col items-end gap-2">
            <div className="text-right">
              <p className="text-xl font-semibold text-gray-900">{price}</p>
              <p className="text-xs text-gray-500">Round-trip</p>
            </div>
            {refundable && (
              <p className="text-xs text-blue-600">Partially Refundable</p>
            )}
            <Button
              onClick={handleSelect}
              className="rounded-full bg-blue-600 px-6 hover:bg-blue-700"
            >
              Select
            </Button>
          </div>
        </div>

        {/* View Details Toggle */}
        <div className="mt-4 border-t pt-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex w-full items-center justify-between text-sm text-gray-600 hover:text-gray-900"
          >
            <span>View Details</span>
            {showDetails ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          {showDetails && (
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Baggage:</span>
                <span className="font-medium">Included</span>
              </div>
              <div className="flex justify-between">
                <span>Cancellation:</span>
                <span className="font-medium">Free within 24h</span>
              </div>
              <div className="flex justify-between">
                <span>Meals:</span>
                <span className="font-medium">Available</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      
    </Card>
  );
}
