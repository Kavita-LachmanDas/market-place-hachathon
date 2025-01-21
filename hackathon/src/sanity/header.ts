// export  const header = {
//     name: 'header',
//     title: 'Header',
//     type: 'document',
//     fields: [
     
//       {
//         name: 'navigationLinks',
//         title: 'Navigation Links',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'title',
//                 title: 'Title',
//                 type: 'string',
//                 validation: (Rule: { required: () => any; }) => Rule.required(),
//               },
//               {
//                 name: 'url',
//                 title: 'URL',
//                 type: 'url',
//                 validation: (Rule: { required: () => any; }) => Rule.required(),
//               },
//             ],
//           },
//         ],
//         description: 'List of navigation links for the header.',
//       },
//       {
//         name: 'icons',
//         title: 'Icons',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'type',
//                 title: 'Icon Type',
//                 type: 'string',
//                 options: {
//                   list: [
//                     { title: 'User', value: 'BiUser' },
//                     { title: 'Search', value: 'BiSearch' },
//                     { title: 'Heart', value: 'BiHeart' },
//                     { title: 'Cart', value: 'BiCart' },
//                     { title: 'truck', value: 'FaTruck' },
//                   ],
//                 },
//                 validation: (Rule: { required: () => any; }) => Rule.required(),
//               },
//               {
//                 name: 'url',
//                 title: 'URL',
//                 type: 'url',
//                 validation: (Rule: { required: () => any; }) => Rule.required(),
//               },
//             ],
//           },
//         ],
//         description: 'Icons to display on the right side of the header.',
//       },
//       {
//         name: 'backgroundColor',
//         title: 'Background Color',
//         type: 'string',
//         description: 'Background color of the navigation menu.',
//       },
//     ],
//   };
  





export const header = {
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule: ValidationRule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: ValidationRule) => Rule.required(),
            },
          ],
        },
      ],
      description: 'List of navigation links for the header.',
    },
    {
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Icon Type',
              type: 'string',
              options: {
                list: [
                  { title: 'User', value: 'BiUser' },
                  { title: 'Search', value: 'BiSearch' },
                  { title: 'Heart', value: 'BiHeart' },
                  { title: 'Cart', value: 'BiCart' },
                  { title: 'Truck', value: 'FaTruck' },
                ],
              },
              validation: (Rule: ValidationRule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule: ValidationRule) => Rule.required(),
            },
          ],
        },
      ],
      description: 'Icons to display on the right side of the header.',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Background color of the navigation menu.',
      validation: (Rule: ValidationRule) =>
        Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
          name: 'hex color',
          invert: false,
        }),
    },
  ],
};

// Type definition for ValidationRule
interface ValidationRule {
  required(): this;
  regex(pattern: RegExp, options?: { name?: string; invert?: boolean }): this;
}
