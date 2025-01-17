// schemas/card2.js
export const card4 = {
    name: 'card4',
    title: 'Card 4',
    type: 'document',
    fields: [
      {
        name: 'img',
        title: 'Image',
        type: 'image', // Type for handling images
        options: {
          hotspot: true, // Allow for cropping and focusing on the image
        },
      },
      {
        name: 'para',
        title: 'Paragraph 1',
        type: 'string', // First paragraph content
      },
      {
        name: 'para2',
        title: 'Paragraph 2 (Optional)',
        type: 'string', // Second paragraph content (optional)
        description: 'This paragraph is optional.',
        initialValue: '', // You can make it optional with an initial value
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string', // Price of the item
      },
    ],
  };
  