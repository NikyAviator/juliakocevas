const express = require('express');
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const app = express();

// Create a new storage instance with Google Cloud Storage
const storage = new Storage({
  keyFilename: path.join(
    __dirname,
    'path-to-our-service-account-key./key.json' // Replace here
  ),
  projectId: 'our-project-id', // Replace here
});

// Create a bucket associated to our storage
const bucketName = 'our-bucket-name'; // Replace here
const bucket = storage.bucket(bucketName);

// Route to get a list of files from the GCP bucket
app.get('/api/artworks', async (req, res) => {
  try {
    const [files] = await bucket.getFiles();

    const artworks = files.map((file) => ({
      imageUrl: `https://storage.googleapis.com/${bucketName}/${file.name}`, // Get the URL of the image
      text: file.metadata.metadata ? file.metadata.metadata.author : '', // Get the author of the image
    }));

    res.json(artworks);
  } catch (error) {
    console.error('Error fetching data: ', error);
    res.status(500).send('Error fetching data');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
