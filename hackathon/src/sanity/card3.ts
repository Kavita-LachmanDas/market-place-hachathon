// schemas/card3.js
export const card3 =  {
    name: 'card3',
    title: 'Card 3',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image', // Image type for handling the image asset
        options: {
          hotspot: true, // Allow for cropping and focusing on the image
        },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string', // Field to hold the text/description for the card
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string', // Link for the "Read More" button
      },
      {
        name: 'time',
        title: 'Time',
        type: 'string', // Field to hold time info (e.g., "5 min")
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime', // Date type for handling the publication date (e.g., "12th Oct 2022")
      },
    ],
  };
  