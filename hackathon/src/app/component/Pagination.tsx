export default function PaginationAndFeatures() {
    return (
      <div>
     <br />
  
        {/* Feature Highlights Section */}
        <div className="bg-pink-50 py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {/* Feature 1 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">Free Delivery</h3>
                <p className="text-gray-500 mt-2">
                  For all orders over $50, consectetur <br /> adipiscing elit.
                </p>
              </div>
              {/* Feature 2 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">90 Days Return</h3>
                <p className="text-gray-500 mt-2">
                  If goods have problems, consectetur <br /> adipiscing elit.
                </p>
              </div>
              {/* Feature 3 */}
              <div>
                <h3 className="text-xl font-bold text-gray-800">Secure Payment</h3>
                <p className="text-gray-500 mt-2">
                  100% secure payment, consectetur <br /> adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  