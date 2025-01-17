// export const card = {
//     name: 'card',
//     title: 'Card',
//     type: 'document',
//     fields: [
//       {
//         name: 'img',
//         title: 'Image',
//         type: 'image', // This stores the image
//         options: {
//           hotspot: true, // Allows users to focus on parts of the image
//         },
//       },
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string', // This stores the card name
//       },
//       {
//         name: 'view',
//         title: 'View Text',
//         type: 'string', // This stores the description or link text
//       },
//     ],
//   };
export const card = {
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'view',
        title: 'View',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // allows cropping and resizing in the studio
        },
      },
    ],
  }
  