"use client";

import { Share2 } from "lucide-react";

export function ShareButton() {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border rounded-full"
      onClick={() => {
        // Share logic
        if (navigator.share) {
          navigator.share({
            title: document.title,
            url: window.location.href,
          });
        } else {
          // Fallback - copy to clipboard
          navigator.clipboard.writeText(window.location.href);
        }
      }}
    >
      <Share2 className="h-4 w-4" />
      Share Article
    </button>
  );
}
