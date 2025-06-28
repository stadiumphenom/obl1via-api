// api/dispatch.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, agents = ['OBL1VIA'], squints = 7 } = req.body;

  return res.status(200).json({
    status: 'queued',
    agents,
    squints,
    prompt,
    estimated_time: '42s',
    preview_url: 'https://example.com/mock-preview.mp4'
  });
}
