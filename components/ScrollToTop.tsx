import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop - Handles two scroll behaviours:
 *
 * 1. When navigating to a NEW ROUTE (e.g. / → /get-started):
 *    Instantly snaps to the top of the page.
 *
 * 2. When navigating to a HASH on the same or a different route
 *    (e.g. clicking "/#features" from any page):
 *    Waits for the DOM to settle then smooth-scrolls to the target element.
 */
export const ScrollToTop: React.FC = () => {
    const { pathname, hash } = useLocation();
    // Track the previous pathname so we know when a true route change happens
    const prevPathname = useRef(pathname);

    useEffect(() => {
        if (hash) {
            // A hash is present — scroll to the target element.
            // We delay slightly so the page has time to fully render before we scroll.
            const id = hash.replace('#', '');
            const attemptScroll = (attemptsLeft: number) => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else if (attemptsLeft > 0) {
                    // Retry up to 5 times with 100 ms intervals (handles async rendering)
                    setTimeout(() => attemptScroll(attemptsLeft - 1), 100);
                }
            };
            setTimeout(() => attemptScroll(5), 80);
        } else {
            // No hash — just a plain route change. Snap to the very top.
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        }

        prevPathname.current = pathname;
    }, [pathname, hash]);

    return null;
};
