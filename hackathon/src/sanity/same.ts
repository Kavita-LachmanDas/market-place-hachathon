// schemas/same.js
export const  same =  {
    name: 'same',
    title: 'Same Section',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Type for handling images
        options: {
          hotspot: true, // Allow for cropping and focusing on the image
        },
      },
      {
        name: 'sectionTitle',
        title: 'Section Title',
        type: 'string', // Title for the section (e.g., "New Arrivals")
      },
      {
        name: 'productTitle',
        title: 'Product Title',
        type: 'string', // Product name (e.g., "Asgaard Sofa")
      },
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string', // Button text (e.g., "Order Now")
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'string', // Link for the button (e.g., URL for ordering)
      },
    ],
  };
  