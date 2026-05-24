"use server";

export interface ContactState {
  success?: boolean;
  error?: string;
}

function isDiscordWebhook(url: string): boolean {
  return url.includes("discord.com/api/webhooks") || url.includes("discordapp.com/api/webhooks");
}

function buildDiscordPayload(name: string, email: string, message: string) {
  return {
    embeds: [
      {
        title: "📬 New Contact Message",
        color: 0x818cf8,
        fields: [
          { name: "Name", value: name, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Message", value: message },
        ],
        footer: { text: "2AM Developers — Contact Form" },
        timestamp: new Date().toISOString(),
      },
    ],
  };
}

function buildSlackPayload(name: string, email: string, message: string) {
  return {
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "📬 New Contact Message", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name:*\n${name}` },
          { type: "mrkdwn", text: `*Email:*\n${email}` },
        ],
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: `*Message:*\n${message}` },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Sent via 2AM Developers contact form • ${new Date().toUTCString()}`,
          },
        ],
      },
    ],
  };
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || name.length < 2) {
    return { error: "Please enter your name." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (!message || message.length < 10) {
    return { error: "Message must be at least 10 characters." };
  }
  if (message.length > 2000) {
    return { error: "Message is too long (max 2000 characters)." };
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return { error: "Contact form is not configured. Please email us directly." };
  }

  const payload = isDiscordWebhook(webhookUrl)
    ? buildDiscordPayload(name, email, message)
    : buildSlackPayload(name, email, message);

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return { error: "Failed to send your message. Please try again." };
    }

    return { success: true };
  } catch {
    return { error: "Network error. Please try again later." };
  }
}
