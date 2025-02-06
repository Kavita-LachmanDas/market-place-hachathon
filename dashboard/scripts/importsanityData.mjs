

import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

// Function to upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    // Fetch image from URL
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    // Upload image to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload image: ${imageUrl}`, error.message);
    return null;
  }
}

// Function to import data into Sanity
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://template-0-beta.vercel.app/api/product');
    const products = response.data;

    console.log(`Fetched ${products.length} products`);

    if (!Array.isArray(products) || products.length === 0) {
      console.log('No products found in the response!');
      return;
    }

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);

      let imageRef = null;
      if (product.imagePath) {
        imageRef = await uploadImageToSanity(product.imagePath);
      }

      // Prepare the Sanity document for the product
      const sanityProduct = {
        _type: 'card2', // Matches your Sanity schema
        id: product.id, // Assuming the API provides a unique ID
        name: product.name,
        price: product.price,
        description: product.description || '', // Fallback to empty string if missing
        discountPercentage: product.discountPercentage || 0, // Default to 0 if not provided
        isFeaturedProduct: product.isFeaturedProduct || false, // Default to false if not provided
        stockLevel: product.stockLevel || 0, // Default to 0 if not provided
        category: product.category || 'Uncategorized', // Default to 'Uncategorized' if missing
        image: imageRef
          ? {
              _type: 'imagePath',
              asset: {
                _type: 'reference',
                _ref: imageRef, // Reference to the uploaded image
              },
            }
          : undefined,
      };

      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error.message);
  }
}

// Call the import function to start the process
importData();