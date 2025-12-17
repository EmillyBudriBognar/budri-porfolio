"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
    useEffect(() => {
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest("a");
            if (link && link.href && link.hostname === location.hostname) {
                // Check if link is already present
                if (document.querySelector(`link[rel="prefetch"][href="${link.href}"]`)) return;

                const prefetchLink = document.createElement("link");
                prefetchLink.rel = "prefetch";
                prefetchLink.href = link.href;
                document.head.appendChild(prefetchLink);
            }
        };

        let lastTap = 0;
        const handleTouchEnd = (event: TouchEvent) => {
            const now = Date.now();
            if (now - lastTap < 300) {
                event.preventDefault();
            }
            lastTap = now;
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return null;
}
