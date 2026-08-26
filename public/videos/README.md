# Agent demo videos

Drop video files in this folder. They are served at `/videos/<filename>` to any
signed-in user (same login wall as the rest of the site).

## Naming

Use the agent's `id` from `src/data/agents.ts` as the filename:

    public/videos/datacenter-viability.mp4   ->   /videos/datacenter-viability.mp4

Optionally add a matching thumbnail (shown before play):

    public/videos/datacenter-viability.jpg

## Wiring it up

Set the agent's `videoUrl` in `src/data/agents.ts` to the path:

    videoUrl: "/videos/datacenter-viability.mp4",

A "Watch Demo" card then appears on that agent's page. YouTube links still work
in the same field — anything not starting with "/" is treated as a YouTube URL.

## Format

- **MP4 (H.264 video + AAC audio)** — plays in every browser. Use this.
- WebM works too. `.mov`, `.avi`, `.mkv` do NOT play in browsers — convert first:

      ffmpeg -i input.mov -vcodec libx264 -acodec aac -movflags +faststart output.mp4

  `-movflags +faststart` matters: without it the video won't start until the
  whole file downloads.

## Size

Keep each file **under 50 MB**. GitHub rejects files over 100 MB outright and
warns above 50 MB, and every megabyte here is committed to the repo permanently.
For anything longer than ~2 minutes, use an unlisted YouTube link instead.
