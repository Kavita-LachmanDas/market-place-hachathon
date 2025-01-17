import { client } from "@/sanity/lib/client";


const fetchAndImportData = async () => {
  try {
    // Fetch data from Mock API
    const response = await fetch('https://677e82f394bde1c1252c3e1e.mockapi.io/card');
    const cards = await response.json();

    // Loop through the fetched data and create documents in Sanity
    for (const card of cards) {
      // Sanity document creation logic
      await client.create({
        _type: 'card', // Ensure 'card' is the correct type in your Sanity schema
        _id: `card-${card.id}`, // Create a unique ID for each card
        img: {
          asset: {
            _ref: card.img, // Assuming `card.img` contains the reference to the image asset
          },
        },
        name: card.name,
        view: card.view,
      });
    }

    console.log('Data successfully imported into Sanity!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
};

fetchAndImportData();
