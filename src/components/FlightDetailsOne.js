import React from "react";

function FlightDetailsOne() {
  return (
    <div className="mt-6 bg-white rounded-lg p-6 shadow-sm">
      <form className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-sm">
        <div className="flex flex-col">
          <label className="font-medium">Flight Information*</label>
          <input
            type="text"
            className="px-4 py-2 border border-medium-gray rounded-md mt-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Flight Type*</label>
          <select
            name="flight-type"
            className="px-2 py-2 border border-medium-gray rounded-md mt-2"
          >
            <option value="international">International</option>
            <option value="domestic">Domestic</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Departure Airport*</label>
          <select
            name="departure-airport"
            className="px-2 py-2 border border-medium-gray rounded-md mt-2"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="XYZ">XYZ</option>
            <option value="ABC">ABC</option>
            <option value="MAA">MAA</option>
            <option value="RST">RST</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Destination Airport*</label>
          <select
            name="destination-airport"
            className="px-2 py-2 border border-medium-gray rounded-md mt-2"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="XYZ">XYZ</option>
            <option value="ABC">ABC</option>
            <option value="MAA">MAA</option>
            <option value="RST">RST</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Flight Route*</label>
          <select
            name="destination-airport"
            className="px-2 py-2 border border-medium-gray rounded-md mt-2"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="XYZ">XYZ</option>
            <option value="ABC">ABC</option>
            <option value="MAA">MAA</option>
            <option value="RST">RST</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="font-medium">Flight Duration*</label>
          <select
            name="destination-airport"
            className="px-2 py-2 border border-medium-gray rounded-md mt-2"
          >
            <option value="" disabled selected>
              Select
            </option>
            <option value="13">13 HR</option>
            <option value="15">15 HR</option>
            <option value="20">20 HR</option>
            <option value="25">25 HR</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default FlightDetailsOne;
