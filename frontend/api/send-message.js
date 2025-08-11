export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  const botToken = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;

  const text = `
[[ 💬 New Message ]]
+ Name: ${name}
+ Email: ${email}
+ Message: ${message}
  `;

  try {
    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "Markdown"
      })
    });

    const data = await telegramRes.json();

    if (!data.ok) {
      return res.status(500).json({ ok: false, error: data.description });
    }

    return res.status(200).json({ ok: true, message: "Message sent successfully" });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
}
