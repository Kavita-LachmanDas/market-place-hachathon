// // schemas/follow.js

// export const follow = {
//     name: 'follow',
//     title: 'Follow Section',
//     type: 'document',
//     fields: [
//       {
//         name: 'title',
//         title: 'Title',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(100), // Validation to ensure a title is provided
//       },
//       {
//         name: 'description',
//         title: 'Description',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(200), // Validation for the description
//       },
//       {
//         name: 'buttonText',
//         title: 'Button Text',
//         type: 'string',
//         validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(1).max(50), // Validation for the button text
//       },
      
//       {
//         name: 'backgroundColor',
//         title: 'Background Color',
//         type: 'string',
//         description: 'Set the background color for the button (e.g., #FAF4F4)',
//         validation: (Rule: { required: () => { (): any; new(): any; regex: { (arg0: RegExp, arg1: { name: string; }): any; new(): any; }; }; }) => Rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, { name: 'hex color' }), // Hex color validation
//       },
//     ],
//   };
  





export const follow = {
  name: 'follow',
  title: 'Follow Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().min(1).max(100), // Validation to ensure a title is provided
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().min(1).max(200), // Validation for the description
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule: ValidationRule) =>
        Rule.required().min(1).max(50), // Validation for the button text
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Set the background color for the button (e.g., #FAF4F4)',
      validation: (Rule: ValidationRule) =>
        Rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, { name: 'hex color' }), // Hex color validation
    },
  ],
};

// Type definition for ValidationRule
interface ValidationRule {
  required(): this;
  min(value: number): this;
  max(value: number): this;
  regex(pattern: RegExp, options?: { name: string }): this;
}
