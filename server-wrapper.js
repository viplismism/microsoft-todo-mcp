import express from 'express';
const app = express();
const PORT = process.env.PORT || 10000;

// Keep server alive
app.get('/', (req, res) => {
  res.send('Microsoft To Do MCP Server - Running');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Start server and keep it running
app.listen(PORT, () => {
  console.log(`HTTP wrapper running on port ${PORT}`);
  
  // Start the MCP server
  require('./build/todo-index.js');
});

// Keep process alive
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});
