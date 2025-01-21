// export const footer =  {
//     name: 'footer',
//     title: 'Footer Section',
//     type: 'document',
//     fields: [
//       {
//         name: 'address',
//         title: 'Address',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(10).max(200),
//       },
//       {
//         name: 'links',
//         title: 'Links',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               { name: 'label', title: 'Label', type: 'string', validation: (Rule: { required: () => any; }) => Rule.required() },
//               { name: 'url', title: 'URL', type: 'string', validation: (Rule: { required: () => any; }) => Rule.required() },
//             ],
//           },
//         ],
//       },
//       {
//         name: 'helpTopics',
//         title: 'Help Topics',
//         type: 'array',
//         of: [{ type: 'string' }],
//       },
//       {
//         name: 'newsletterPlaceholder',
//         title: 'Newsletter Placeholder',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(50),
//       },
//       {
//         name: 'subscribeButtonText',
//         title: 'Subscribe Button Text',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; }) => Rule.required().max(20),
//       },
//       {
//         name: 'footerBottomText',
//         title: 'Footer Bottom Text',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(10).max(100),
//       },
//     ],
//   };
  


export const footer = {
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().min(10).max(200),
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: ValidationRule) =>
                Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (Rule: ValidationRule) =>
                Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'helpTopics',
      title: 'Help Topics',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'newsletterPlaceholder',
      title: 'Newsletter Placeholder',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().max(50),
    },
    {
      name: 'subscribeButtonText',
      title: 'Subscribe Button Text',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().max(20),
    },
    {
      name: 'footerBottomText',
      title: 'Footer Bottom Text',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().min(10).max(100),
    },
  ],
};

// Type definition for ValidationRule
interface ValidationRule {
  required(): this;
  min(value: number): this;
  max(value: number): this;
}
