import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Clock, ChevronRight, ArrowLeft, ChevronDown, Upload } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export default function TravellerDetailsPage() {
  const navigate = useNavigate();
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");

  const handleContinue = () => {
    navigate("/review");
  };

  const genders = ["Male", "Female", "Other"];
  const nationalities = [
    "Bangladesh",
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Top progress bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="font-medium text-gray-900">Time Remaining</span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">
              25:00
            </span>
            <div className="hidden items-center gap-3 md:flex">
              <span className="flex items-center gap-1 text-gray-500">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">
                  1
                </span>
                <span>Payment Option</span>
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="flex items-center gap-1 text-blue-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  2
                </span>
                <span>Traveller Details</span>
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="flex items-center gap-1 text-gray-500">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">
                  3
                </span>
                <span>Review &amp; Payment</span>
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
          {/* Left: Traveller Details Form */}
          <Card>
            <CardContent className="space-y-6 p-6">
              {/* Header with back button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate("/payment")}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h2 className="text-lg font-semibold text-gray-900">
                  Traveller Details
                </h2>
              </div>

              {/* Passport Upload Section */}
              <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-sm font-medium text-gray-900">
                  Upload your Passport
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Supported formats: PDF, JPG, PNG (Max 5MB)
                </p>
              </div>

              {/* Form Fields - Two Columns */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* First Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Select Gender <span className="text-red-500">*</span>
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <span>{gender || "Enter gender"}</span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0" align="start">
                      <div className="py-1">
                        {genders.map((g) => (
                          <button
                            key={g}
                            onClick={() => setGender(g)}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          >
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Nationality */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Select Nationality <span className="text-red-500">*</span>
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <span>{nationality || "Country"}</span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-56 p-0" align="start">
                      <div className="max-h-60 overflow-y-auto py-1">
                        {nationalities.map((country) => (
                          <button
                            key={country}
                            onClick={() => setNationality(country)}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                          >
                            {country}
                          </button>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-sm text-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                        <span>
                          {dateOfBirth
                            ? format(dateOfBirth, "MMM dd, yyyy")
                            : "Enter your date of birth"}
                        </span>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent 
                      className="w-auto p-0 center-viewport" 
                      align="center"
                    >
                      <Calendar
                        mode="single"
                        selected={dateOfBirth}
                        onSelect={setDateOfBirth}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Frequent Flyer Number */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Frequent Flyer Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                {/* Post Code */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Post Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Optional Service Section */}
              <div className="border-t pt-6">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">
                  Select Optional Service
                </h3>
                <div className="space-y-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-3 hover:border-blue-400">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-blue-600"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Travel Insurance
                      </p>
                      <p className="text-xs text-gray-500">
                        Protect your trip with comprehensive travel insurance
                      </p>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-lg border bg-white p-3 hover:border-blue-400">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-blue-600"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Extra Baggage
                      </p>
                      <p className="text-xs text-gray-500">
                        Add additional baggage allowance
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Continue Button */}
              <Button
                onClick={handleContinue}
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Continue to Review
              </Button>
            </CardContent>
          </Card>

          {/* Right: Fare Summary */}
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    DAC ⇌ CXB
                  </p>
                  <p className="text-xs text-gray-500">
                    Round trip · 10 Nov - 12 Nov
                  </p>
                </div>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                  Details
                </span>
              </div>

              <div className="space-y-2 border-t pt-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Air Fare</span>
                  <span className="font-medium text-gray-900">765 USD</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>1 x BaseFare (Adult)</span>
                  <span>706 USD</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>1 x Tax (Adult)</span>
                  <span>59 USD</span>
                </div>
                <div className="flex items-center justify-between text-orange-600">
                  <span>Discount Availed</span>
                  <span>- 87 USD</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Convenience Fee</span>
                  <span>+ 5 USD</span>
                </div>
              </div>

              <div className="mt-3 border-t pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-900">
                    Total price
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    765 USD
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
