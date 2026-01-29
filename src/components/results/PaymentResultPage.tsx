import React from 'react'
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FlightResultCard from "./FlightResultCard";

const PaymentResultPage = () => {
  return (
    // <div className="min-h-screen bg-slate-50">
    //   <span>enter your credentials in this page</span>
      // </div>
      <Card>
          <CardContent className="p-6">
              <div className="w-50% grid grid-cols-12 gap-6 items-center ">
                  <p>First Name</p>
              <input className="bg-blue-600 text-white" placeholder='Enter your full
               name'></input>
                <input className="bg-blue-600 text-white" placeholder="Upload your passport"></input>
              </div>
              <input className="bg-blue-600 text-white" placeholder='Enter your full
               name'></input>
                <input className="bg-blue-600 text-white" placeholder="Upload your passport"></input>
              <div>
                <Button className="bg-green-600 text-white mt-4">Proceed to Pay</Button>  
              </div>
          </CardContent>
      </Card>
  )
}

export default PaymentResultPage
