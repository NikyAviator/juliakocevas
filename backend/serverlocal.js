const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for requests from http://localhost:5173
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

// Serve static files from the frontend/public folder
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

// API endpoint to get the list of media files
app.get('/api/media', (req, res) => {
  const publicDir = path.join(__dirname, '..', 'frontend', 'public', 'media'); // Ensure this path is correct

  // Check if the media directory exists
  if (!fs.existsSync(publicDir)) {
    return res.status(500).json({ error: 'Media directory does not exist' });
  }

  // Read the public/media folder and get all file names
  fs.readdir(publicDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Failed to read files' });
    }

    // Filter to return only jpg, png, and mp4 files
    const mediaFiles = files.filter(
      (file) =>
        file.imageUrl.endsWith('.jpg') ||
        file.imageUrl.endsWith('.png') ||
        file.imageUrl.endsWith('.mp4')
    );

    // Map the file names to their URL paths
    const mediaUrls = mediaFiles.map((file) => `/media/${file}`);

    // console.log('Media files:', mediaUrls);
    res.json(mediaUrls);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
