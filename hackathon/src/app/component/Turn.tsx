import React from 'react'

export default function Turn() {
  return (
    <div>
           {/* Pagination Section */}
           <div className="flex justify-center my-6">
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded bg-yellow-100 text-yellow-600 font-semibold hover:bg-yellow-200">
              1
            </button>
            <button className="w-10 h-10 rounded bg-yellow-50 text-yellow-600 font-semibold hover:bg-yellow-100">
              2
            </button>
            <button className="w-10 h-10 rounded bg-yellow-50 text-yellow-600 font-semibold hover:bg-yellow-100">
              3
            </button>
            <button className="w-20 h-10 rounded bg-yellow-50 text-yellow-600 font-semibold hover:bg-yellow-100">
              Next
            </button>
          </div>
        </div>
    </div>
  )
}
