interface VideoEmbedProps {
  /**
   * Either a YouTube link (youtu.be / watch?v= / embed/) or a path to a file in
   * `public/videos`, e.g. "/videos/datacenter-viability.mp4".
   */
  url: string;
  title?: string;
  /** Optional thumbnail for self-hosted files, e.g. "/videos/my-agent.jpg". */
  poster?: string;
}

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
    /youtube\.com\/live\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

const FRAME =
  "relative w-full aspect-video rounded-xl overflow-hidden shadow-card border border-slate-200 bg-slate-900";

export function VideoEmbed({ url, title = "Demo video", poster }: VideoEmbedProps) {
  // Self-hosted file dropped into public/videos — served directly, no YouTube.
  if (url.startsWith("/")) {
    return (
      <div className={FRAME}>
        <video
          src={url}
          poster={poster}
          title={title}
          controls
          preload="metadata"
          playsInline
          className="absolute inset-0 w-full h-full object-contain bg-black"
        />
      </div>
    );
  }

  const id = extractYoutubeId(url);
  if (!id) return null;

  return (
    <div className={FRAME}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
