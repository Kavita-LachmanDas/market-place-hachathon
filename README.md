
#### 🌟 Hackathon Day 2 Completed! 🌟
Hello everyone! I am kavita a Frontend Web Developer, and I am thrilled to share that I’ve successfully completed my Hackathon Day 2 Task!

📄 What I Worked On Today:
I focused on planning the technical foundation for my project — a Furniture E-Commerce Website. Here's what I accomplished:

1️⃣ Main Objectives:

Responsive Design: Ensuring seamless experience on both mobile and desktop devices.
2️⃣ Backend Setup (Sanity CMS):

Designed schemas for:
Products: Name, description, price, category, images.
Orders: OrderID, CustomerID, status.
Customers: Name, email, address, phone number.
3️⃣ API Definitions:

/products (GET): Fetch all furniture products.
/orders (POST): Submit order data.
/product/:id (GET): Fetch a single product by ID.
/shipment-status (GET): Fetch shipment tracking info.
This detailed plan sets the stage for Day 3, where I’ll focus on implementation! 💻

💡 Takeaway: Planning ahead makes execution smoother. Remember, the foundation you lay determines the strength of your outcome.

If you have any feedback or suggestions, I’d love to hear them! 😊



# Plan The System Architecture:

Frontend (React/Next.js):
 - [Dynamic rendering of pages.]
 - [Sanity CMS (Backend):]
  - [API calls to fetch data from Sanity CMS]
   - [and third-party APIs.]
    - [Product and order data storage.]



# Third-Party APIs:
- Payment gateway for secure transactions.

- Shipment tracking API for real-time updates.




# Frontend pages:

#### Home :
- featured products and others

#### Product Listing :
- Filter by category, fetch data from API.

#### Product Details :
- Images title, description, buttons.

#### Cart :
- Add/remove items. and display total cost dynamically

#### Checkout :
- item prices , review their add to cart items.

#### Billing :
- payment integration,
- Order Confirmation.

#### Main Thing about our website :
- Responsive design:
- Mobile aur desktop must have seamless experience 


## Backend Sanity CMS (Schema)




### Products:
- Name: 
```bash
   description, price, category (living room, bedroom, office), images
```
- Orders:

 ```
Order ID, customer info, products purchased, status (pending, shipped, delivered).
 ```
 
- Customers: 
```
Name, email, address, phone number.
```

## APIs

![App Screenshot](/public/apis%20doc.PNG)


#### Example Product Schema:

export default {
  name: 'product',
  type: 'document',
  fields: [

    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' },
    { name: 'stock', type: 'number', title: 'Stock Quantity' },
  ],
};


## Third-Party APIs:
- Shipment Tracking API.
- Payment Gateway


```
[Frontend (Next.js)] 
   | 
[Sanity CMS] ---> [Product Data API]
   | 
[Third-Party APIs] ---> [Payment Gateway, Shipment API]

```


## user workflow

```
[User] --> [Browse Products] --> [Add to Cart] --> [Checkout] --> [Payment Processed] --> [Order Confirmed]

```

## Backend Workflow

```
[Frontend Request] --> [Sanity CMS (Fetch Data)] --> [Third-Party API (Shipment/Payment)]
```

## inshort Workflow

```
Start with the Homepage:
Fetch featured categories and products.
Ensure mobile responsiveness.
Implement Filters:
Connect them to the /products API.
Develop Checkout and Cart Functionality:
Add payment gateway integration.
Test API Integration:
Ensure all APIs work as expected.
Deploy:
Use platforms like Netlify or Vercel.

```







![App Screenshot](/public/structure.PNG)








```
User: Frontend se interact karta hai.
Frontend (Next.js/React): User requests ko process karta hai aur backend ke sath communicate karta hai.
Sanity CMS: Data (products, orders, categories) ko manage karta hai.
Product Data API: Sanity CMS ke data ko fetch aur deliver karta hai.
Payment Gateway: Payment ko securely process karta hai.
Shipment API: Order tracking ke liye real-time information provide karta hai.

```