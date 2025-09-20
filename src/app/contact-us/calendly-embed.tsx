"use client";

import { useEffect } from "react";

const CalendlyEmbed = ({ url }: { url: string }) => {
  useEffect(() => {
    const head = document.querySelector("head")!;
    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );
    head.appendChild(script);
  }, []);

  return (
    <div className="h-[900px] mt-10">
      <div
        className="calendly-inline-widget h-full w-full"
        data-url={url}

      ></div>
    </div>
  );
};

export default CalendlyEmbed;