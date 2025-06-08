import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apikey = process.env.GEMINI_API_KEY;

export const handlePost = async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: "Input is required" });
  }
  
  if (input == "#savechat"){
    
  }

  console.log("Incoming input:", input);
  console.log("Using API key:", apikey ? "Loaded" : "Not loaded");

  const payload = {
    contents: [
      {
        parts: [{ text: input }]
      }
    ]
  };

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apikey}`,
      payload,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No reply";
    console.log("Gemini reply:", reply);

    res.status(201).json({ message: "successful", output: reply });

  } catch (error) {
    console.error("Gemini API error:", error.response?.data || error.message || error);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};
