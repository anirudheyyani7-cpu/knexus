"use client";

interface YoutubeEmbedProps {
  url: string;
  title?: string;
}

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export function YoutubeEmbed({ url, title = "Demo video" }: YoutubeEmbedProps) {
  const id = extractYoutubeId(url);
  if (!id) return null;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-card border border-slate-200">
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
