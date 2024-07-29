import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function BookingStep() {
  const steps = [
    "Flight Details",
    "Schedule",
    "Aircraft Info",
    "Pricing",
    "Review",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className="w-full overflow-x-auto">
      <div className="lg:grid lg:grid-cols-5 flex flex-nowrap w-full py-4 px-2 gap-x-10 text-sm">
        {steps?.map((step, index) => (
          <div key={index} className="flex gap-x-3 items-center">
            <div
              className={`p-4 font-bold rounded-md text-lg text-white ${
                currentStep === index + 1 ? "bg-primary" : "bg-medium-gray"
              }`}
            >
              {index + 1}
            </div>
            <div>{step}</div>
            {index < steps.length - 1 && (
              <MdKeyboardDoubleArrowRight fontSize={24} className="ml-6" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingStep;
