// schemas/viewAllPosts.js
export const veiwAllPost = {
    name: 'viewAllPosts',
    title: 'View All Posts',
    type: 'document',
    fields: [
      {
        name: 'url',
        title: 'URL',
        type: 'url', // Field for the link's URL
        // Validate it as a valid URL
      },
      {
        name: 'text',
        title: 'Text',
        type: 'string', // Field for the hyperlink text (e.g., "View All Posts")
       
      },
    ],
  };
  