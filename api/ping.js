export default async function handler(req, res) {
  try {
    const response = await fetch("https://comingsoonbackend-s7hy.onrender.com/");
    console.log("Ping OK:", response.status);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log("Ping Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}
