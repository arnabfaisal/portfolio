import React from "react";

export function Footer() {
  const lastUpdated = "January 2026";

  return (
    <footer className="w-full border-t border-border bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        
        {/* Left */}
        <p>
          Last updated — <span className="text-foreground">{lastUpdated}</span>
        </p>

        {/* Right */}
        <p>
          Vibe coded with a little bit of{" "}
          <span className="text-blue-500 font-medium">customization</span>
        </p>

      </div>
    </footer>
  );
}
