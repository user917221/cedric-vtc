"use client";

import { useEffect, useState } from "react";
import { rawHtml } from "@/app/rawHtml";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Inject scripts sequentially to match original dependency order
    const scriptShared = document.createElement("script");
    scriptShared.src = "/assets/javascripts/shared.js";
    scriptShared.defer = true;
    document.body.appendChild(scriptShared);

    scriptShared.onload = () => {
      const scriptLanding = document.createElement("script");
      scriptLanding.src = "/assets/javascripts/landing.js";
      scriptLanding.defer = true;
      document.body.appendChild(scriptLanding);
    };

    return () => {
      // Clean up injected scripts on unmount if necessary
      try {
        document.body.removeChild(scriptShared);
      } catch (e) {}
    };
  }, [mounted]);

  // Client-only render to prevent hydration mismatches with injected raw HTML
  if (!mounted) {
    return (
      <div 
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#050505",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999
        }}
      >
        <div style={{ fontFamily: "Cinzel, serif", fontSize: "1.5rem", letterSpacing: "0.2em", color: "#FFFFFF" }}>
          CÉDRIC VTC
        </div>
      </div>
    );
  }

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: rawHtml }} 
      style={{ minHeight: "100vh" }}
    />
  );
}
