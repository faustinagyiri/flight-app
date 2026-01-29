import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FlightResultCard from "./FlightResultCard";
import { Clock, Filter } from "lucide-react";

export default function SearchResultsPage() {
  const [selectedTab, setSelectedTab] = useState("recommended");

  const tabs = [
    { id: "recommended", label: "Recommended", subtitle: "For you" },
    { id: "nonstop", label: "Nonstop", subtitle: "1,425" },
    { id: "fastest", label: "Fastest", subtitle: "1h 50min" },
    { id: "earliest", label: "Earliest", subtitle: "07:00 AM" },
    { id: "cheapest", label: "Cheapest", subtitle: "8,457" },
  ];

  const flights = [
    {
      airline: "Biman Bangladesh",
      airlineLogo: "🇧🇩",
      from: "DAC",
      to: "BKK",
      departTime: "8:00 AM",
      departDate: "8 Nov",
      departDay: "Thursday",
      departAirport: "Hazrat Shahjalal airport",
      arriveTime: "10:15 AM",
      arriveDate: "8 Nov",
      arriveDay: "Thursday",
      arriveAirport: "Suvarnabhumi Airport",
      duration: "2h 15 min",
      type: "NON-STOP",
      price: "$167",
      refundable: true,
    },
    {
      airline: "Air Astra",
      airlineLogo: "⭐",
      from: "DAC",
      to: "BKK",
      departTime: "8:30 AM",
      departDate: "8 Nov",
      departDay: "Thursday",
      departAirport: "Hazrat Shahjalal airport",
      arriveTime: "10:35 AM",
      arriveDate: "8 Nov",
      arriveDay: "Thursday",
      arriveAirport: "Suvarnabhumi Airport",
      duration: "2h 05 min",
      type: "NON-STOP",
      price: "$310",
      refundable: true,
    },
    {
      airline: "Us-Bangla Airlines",
      airlineLogo: "✈️",
      from: "DAC",
      to: "BKK",
      departTime: "9:00 AM",
      departDate: "8 Nov",
      departDay: "Thursday",
      departAirport: "Hazrat Shahjalal airport",
      arriveTime: "11:30 AM",
      arriveDate: "8 Nov",
      arriveDay: "Thursday",
      arriveAirport: "Suvarnabhumi Airport",
      duration: "2h 30 min",
      type: "NON-STOP",
      price: "$305",
      refundable: false,
    },
    {
      airline: "Biman Bangladesh",
      airlineLogo: "🛫",
      from: "DAC",
      to: "BKK",
      departTime: "9:30 AM",
      departDate: "8 Nov",
      departDay: "Thursday",
      departAirport: "Hazrat Shahjalal airport",
      arriveTime: "11:50 AM",
      arriveDate: "8 Nov",
      arriveDay: "Thursday",
      arriveAirport: "Suvarnabhumi Airport",
      duration: "2h 20 min",
      type: "NON-STOP",
      price: "$300",
      refundable: false,
    },
  ];

  return (
    <div className=" flex min-h-screen bg-linear-to-br from-blue-50 via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Search Criteria Pills headings */}
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
            Dhaka (DAC) - Bangkok (BKK)
          </div>
          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
            Check-in, Nov 20 - Check-out, Dec 23
          </div>
          <div className="rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700">
            Guest 1, (2 Children)
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            Advance filters
          </Button>
        </div>

        {/* Header with Time Remaining */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              154 Available Flights
            </h2>
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">
                Time Remaining: 25:00
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500">Price Includes VAT & Tax</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex justify-end boarder gap-1 border-b bg-red-50 px-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                selectedTab === tab.id
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="text-left">
                <div>{tab.label}</div>
                <div className="text-xs text-gray-500">{tab.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Smart Filters */}
          <div className="col-span-3">
            <Card className="sticky top-4">
              <CardContent className="p-4">
                <div className="mb-4 flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-600" />
                  <h3 className="font-semibold text-gray-900">Smart Filters</h3>
                </div>
                <input
                  type="text"
                  placeholder="e.g: What are you looking for?"
                  className="mb-4 w-full rounded-lg border
                   border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="w-full bg-blue-600 text-white">Filter flights</Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Flight Results */}
          <div className="col-span-9 space-y-4">
            {flights.map((flight, index) => (
              <FlightResultCard key={index} {...flight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
