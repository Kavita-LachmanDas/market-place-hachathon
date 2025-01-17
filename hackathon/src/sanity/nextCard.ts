// schemas/nextCard.js
export const nextCard = {
    name: 'nextCard',
    title: 'Next Card',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string', // The main title for the card
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text', // The description text for the card
      },
    ],
  };
  
  