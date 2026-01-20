"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollHandler() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.replace("#", "");
                // Decode URI component in case the ID has special characters
                const decodedId = decodeURIComponent(id);
                const element = document.getElementById(decodedId) || document.getElementById(id);

                if (element) {
                    // Scroll with offset for sticky headers (adjust 120px as needed)
                    const headerOffset = 120;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        };

        // Try scrolling immediately
        handleScroll();

        // Retry finding the element after a short delay (for hydration/images)
        const timeoutIds: NodeJS.Timeout[] = [];
        timeoutIds.push(setTimeout(handleScroll, 100));
        timeoutIds.push(setTimeout(handleScroll, 500));
        timeoutIds.push(setTimeout(handleScroll, 1000));

        // Listen for hash changes manually if needed (though useEffect handles most nav)
        window.addEventListener("hashchange", handleScroll);

        return () => {
            timeoutIds.forEach(clearTimeout);
            window.removeEventListener("hashchange", handleScroll);
        };
    }, [pathname, searchParams]);

    return null;
}
