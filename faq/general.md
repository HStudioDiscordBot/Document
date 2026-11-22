---
outline: deep
---

# General FAQ

Answers to the most common questions and troubleshooting steps for **HStudio**.

## Why can't I play YouTube links directly?

On the free plan, direct YouTube URLs cannot be played straight from `/play`. You have two options:

1. **Convert the link first (Free)**
   - Run `/converter youtube-url` in Discord and paste your YouTube link to get an HStudio Play link.
   - Or convert it on the web at [hstudiobot.com/play](https://www.hstudiobot.com/play) (see the step-by-step guide: [Play from YouTube](../guide/play-from-youtube)).
   - Paste the converted link into `/play` to start listening immediately.

2. **Upgrade to HStudio Premium**
   - Play YouTube links directly with `/play` without converting them first.

---

## How do I change the bot's language?

**HStudio** automatically matches your Discord client language (supports both English and Thai).

To switch languages:
1. Open Discord **User Settings**.
2. Go to **Language**.
3. Select **English, US** or **English, UK** for English, or **ไทย** for Thai.

---

## Can I change the default music search source?

Yes. By default, HStudio searches on **Spotify**, and you can change your personal default search source using `/setting search`.

Supported search sources:
- **Free:** Spotify, SoundCloud, Apple Music, Deezer
- **HStudio Premium:** YouTube, YouTube Music

::: tip Tip
To override the search engine for a single command without changing your default, use the optional `source` parameter in `/play` (available for search keywords only).
:::

---

## Which features require HStudio Premium, and how do I check my status?

Features exclusive to **HStudio Premium** include:
- Direct YouTube link playback
- Setting YouTube or YouTube Music as your default search source (`/setting search`)
- Interactive music control panel (`/control`)
- Disabling bot ads (`/setting ads`)
- Priority support and exclusive features

Run `/premium` anytime to check your current plan, active status, and expiration date (visible only to you), or visit [hstudiobot.com/premium](https://www.hstudiobot.com/premium) to upgrade or renew.

---

## Audio is lagging, failing to load, or the bot won't join — how do I fix it?

Try the following checks in order:

1. **Join a Voice Channel first** before running music commands.
2. **Verify bot permissions** — make sure HStudio has the required voice permissions. See [Bot Permission Issue](./bot-permission).
3. **Check player node status** using `/nodes` in Discord or the live [HStudio Status Page](https://www.hstudiobot.com/status).
4. **Switch nodes or reset the session:**
   - When multiple nodes are online, you can pick a specific node via the optional `node` parameter in `/play` or `/playlist`.
   - If the bot is stuck in a voice channel, run `/leave` and then `/play` again.

---

## How do I play playlists and control the queue?

- **Custom Playlists:** Create and manage playlists on [hstudiobot.com](https://www.hstudiobot.com), then run `/playlist` in Discord to select and play your saved playlists.
- **Visual Controls:** Launch the [HStudio Activity](../guide/listen-from-activity) inside a voice channel to browse and add songs to the queue.
- **Essential Playback Commands:**
  - `/play` — Play a song or add it to the queue
  - `/pause` / `/resume` — Pause or resume playback
  - `/skip` — Skip to the next track
  - `/queue` — View the current queue
  - `/loop` — Toggle repeat mode (current track or entire queue)
  - `/shuffle` — Shuffle the queue
  - `/seek` — Jump to a timestamp in the current track
  - `/volume` — Adjust volume (`1`–`200`)
  - `/clear` — Clear the queue
  - `/leave` — Disconnect the bot from the voice channel

---

## Need more help?

Run `/help` anytime for quick links and the full command list, or join the [HStudio Support Discord](https://discord.gg/GzTbuZHTEx) to reach the team directly.
