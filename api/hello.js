// Simple test endpoint
export default function handler(request) {
  return Response.json({ 
    message: 'API is working!',
    nodeVersion: process.version,
    timestamp: new Date().toISOString()
  });
}
