export  const header = {
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
                validation: (Rule: { required: () => any; }) => Rule.required(),
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
                validation: (Rule: { required: () => any; }) => Rule.required(),
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
                    { title: 'truck', value: 'FaTruck' },
                  ],
                },
                validation: (Rule: { required: () => any; }) => Rule.required(),
              },
              {
                name: 'url',
                title: 'URL',
                type: 'url',
                validation: (Rule: { required: () => any; }) => Rule.required(),
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
      },
    ],
  };
  