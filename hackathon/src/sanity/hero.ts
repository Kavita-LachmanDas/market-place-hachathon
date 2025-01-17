// schemas/hero.js
export const hero = {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Title of the hero section',
      },
     
      {
        name: 'buttonText',
        title: 'Button Text',
        type: 'string',
        description: 'Text to display on the CTA button',
      },
      {
        name: 'buttonLink',
        title: 'Button Link',
        type: 'url',
        description: 'Link the CTA button will point to',
      },
      {
        name: 'image',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Image for the hero section',
      },
    ],
  };
  