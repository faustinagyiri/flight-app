import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Check, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FlightResultsPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/traveller")
  };

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
              <span className="flex items-center gap-1 text-blue-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                  1
                </span>
                <span>Payment Option</span>
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="flex items-center gap-1 text-gray-500">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-700">
                  2
                </span>
                <span>Traveler Details</span>
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
          {/* Left: Payment options */}
          <Card>
            <CardContent className="space-y-6">
              <h2 className="border-b pb-4 text-lg font-semibold text-gray-900">
                Payment Option
              </h2>

              {/* Coupon section */}
              <div className="space-y-3 rounded-lg border border-green-200 bg-green-50/60 p-4">
                <p className="text-sm font-medium text-gray-900">
                  Coupon Discount Applied
                </p>
                <div className="flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm">
                  <input
                    placeholder="Enter Coupon Code"
                    className="w-full border-none bg-transparent text-sm outline-none"
                  />
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
                    <Check className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Coupon options */}
              <div className="space-y-3">
                {[
                  {
                    title: "Trego2244",
                    description:
                      "Flat 15% discount up to BDT 1,000 on domestic flight with Mastercard Trego card.",
                  },
                  {
                    title: "Flying Side",
                    description:
                      "Your gateway to savings on all online payments.",
                  },
                  {
                    title: "Travel On",
                    description:
                      "Special deals for EBL, MTB, City Bank Cards & Brac Bank users.",
                  },
                  {
                    title: "Fly Elite",
                    description:
                      "Exclusive for Robi Elite customers only.",
                  },
                ].map((item) => (
                  <label
                    key={item.title}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border bg-white px-4 py-3 text-sm hover:border-blue-400"
                  >
                    <input
                      type="radio"
                      name="coupon"
                      className="mt-1 h-4 w-4 accent-blue-600"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Other payment methods (no icons as requested) */}
              <div className="space-y-2 pt-4">
                <p className="text-sm font-medium text-gray-900">
                  Other Payment Method
                </p>
                <p className="text-xs text-gray-500">
                  Choose from your preferred bank or card provider during the
                  next step.
                </p>
              </div>
              <div>
                <Button
                  onClick={handleContinue}
                  className="w-full bg-blue-600 text-white">
                  Continue to Payment
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right side: Fare summary */}
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    DAC → CXB
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

