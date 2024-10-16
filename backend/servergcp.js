const express = require('express');
const { Storage } = require('@google-cloud/storage');
const path = require('path');
const app = express();
const cors = require('cors');

// Enable CORS for requests from http://localhost:5173
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

// Initialize Google Cloud Storage
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  keyFilename: process.env.GCP_KEYFILE_PATH,
});

// Create a bucket associated to our storage
const bucketName = process.env.GCP_BUCKET_NAME; // Replace here
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
