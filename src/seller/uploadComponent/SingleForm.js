import React from 'react'

export default function SingleForm() {
	return (
		<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
       
      <div className="">
        <div className="">
    <div className="">
      <div>
         
        <div className="p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-2">
                  <label htmlFor="address">SKU Code</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Chemical Name</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="email">Structure</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" 
                  />
                </div> 
                <div className="md:col-span-2">
                  <label htmlFor="address">Date Of Expiry</label>
                  <input
                    type="date"
                    name="address"
                    id="address"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="city">Date Of Manufacture</label>
                  <input
                    type="date"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="city">Purity</label>
                  <select
                    type="text"
                    name="city"
                    id="city"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    
                  >
                  <option>Choose...</option>
                  <option>Supplier 30 Days only</option>
                  <option>Buyer-Advance / 30 Days</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Description</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Quantity</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Units</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Stock</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">Rate</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="zipcode">GST</label>
                  <input
                    type="text"
                    name="zipcode"
                    id="zipcode"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>
                <div className="md:col-span-5">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      className="form-checkbox"
                    />
                    <label htmlFor="billing_same" className="ml-2">
                      I certify that the above facts are true to the best of my knowledge .
                    </label>
                  </div>
                </div>
                <div className="md:col-span-6 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
      </div> 
  </div> 
	)
}