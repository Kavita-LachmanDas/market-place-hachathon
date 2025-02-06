// // // schemas/card2.js
// // export const card2 = {
// //     name: 'card2',
// //     title: 'Card 2',
// //     type: 'document',
// //     fields: [
// //       {
// //         name: 'img',
// //         title: 'Image',
// //         type: 'image', // Type for handling images
// //         options: {
// //           hotspot: true, // Allow for cropping and focusing on the image
// //         },
// //       },
// //       {
// //         name: 'para',
// //         title: 'Paragraph 1',
// //         type: 'string', // First paragraph content
// //       },
// //       {
// //         name: 'para2',
// //         title: 'Paragraph 2 (Optional)',
// //         type: 'string', // Second paragraph content (optional)
// //         description: 'This paragraph is optional.',
// //         initialValue: '', // You can make it optional with an initial value
// //       },
// //       {
// //         name: 'price',
// //         title: 'Price',
// //         type: 'string', // Price of the item
// //       },
// //     ],
// // //   };
// // export const card2 = {
// //   name: 'card2',
// //   title: 'Card 2',
// //   type: 'document',
// //   fields: [
// //     {
// //       name: 'image',
// //       title: 'Image',
// //       type: 'image',
// //       options: { hotspot: true },
// //     },
// //     {
// //       name: 'para',
// //       title: 'Paragraph 1',
// //       type: 'string',
// //     },
// //     {
// //       name: 'para2',
// //       title: 'Paragraph 2 (Optional)',
// //       type: 'string',
// //       initialValue: '',
// //     },
// //     {
// //       name: 'price',
// //       title: 'Price',
// //       type: 'string',
// //     },
// //   ],
// // };






































// ////////////////////////////////////////////////////////////////////////////////////////////
// // schemas/product.js

// export const card2 = {
//   name: 'card2',
//   title: 'card 2',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'Product ID',
//       type: 'string',
//       description: 'Unique identifier for the product',
//     },
//     {
//       name: 'name',
//       title: 'Product Name',
//       type: 'string',
//       description: 'Name of the product',
//     },
//     {
//       name: 'imagePath',
//       title: 'Product Image',
//       type: 'image',
//       options: {
//         hotspot: true, // Allow cropping and image focus
//       },
//       description: 'Upload an image of the product',
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'string',
//       description: 'Price of the product',
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       description: 'Short description of the product',
//     },
//     {
//       name: 'discountPercentage',
//       title: 'Discount Percentage',
//       type: 'number',
//       description: 'Discount percentage applied to the product',
//       validation: (Rule: { min: (arg0: number) => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.min(0).max(100), // Value between 0 and 100
//     },
//     {
//       name: 'isFeaturedProduct',
//       title: 'Is Featured Product',
//       type: 'boolean',
//       description: 'Mark if this product is featured',
//     },
//     {
//       name: 'stockLevel',
//       title: 'Stock Level',
//       type: 'number',
//       description: 'Number of items available in stock',
//       validation: (Rule: { min: (arg0: number) => any; }) => Rule.min(0), // Minimum stock level is 0
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       description: 'Category of the product',
//     },
//   ],
// };













export const card2 = {
    name: 'card2',
    title: 'Card 2',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Product ID',
        type: 'string',
        description: 'Unique identifier for the product',
      },
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        description: 'Name of the product',
      },
      {
        name: 'imagePath',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // Allow cropping and image focus
        },
        description: 'Upload an image of the product',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
        description: 'Price of the product',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Short description of the product',
      },
      {
        name: 'discountPercentage',
        title: 'Discount Percentage',
        type: 'number',
        description: 'Discount percentage applied to the product',
        validation: (Rule: ValidationRule) =>
          Rule.min(0).max(100), // Value between 0 and 100
      },
      {
        name: 'isFeaturedProduct',
        title: 'Is Featured Product',
        type: 'boolean',
        description: 'Mark if this product is featured',
      },
      {
        name: 'stockLevel',
        title: 'Stock Level',
        type: 'number',
        description: 'Number of items available in stock',
        validation: (Rule: ValidationRule) =>
          Rule.min(0), // Minimum stock level is 0
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'Category of the product',
      },
    ],
  };
  
  // Type definition for ValidationRule
  interface ValidationRule {
    min(value: number): this;
    max(value: number): this;
    required(): this;
    regex(pattern: RegExp, options?: { name?: string; invert?: boolean }): this;
  }