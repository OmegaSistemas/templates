import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        global: {},
    },
    resolve: {
        alias: [
            { find: "@", replacement: path.resolve(__dirname, "./src") },
            {
                // this is required for the SCSS modules
                find: /^~(.*)$/,
                replacement: "$1",
            },
        ],
    },
    plugins: [
        // babel(),
        react(),
        VitePWA({
            registerType: "autoUpdate",
            cleanupOutdatedCaches: true,
            includeManifestIcons: true,
            // includeAssets: ["icons/*.png", "assets/*.png"],
            workbox: {
                globPatterns: [
                    // all packaged resources are stored here
                    "assets/*",
                    // add HTML and other resources for the root directory
                    "*.{svg,png,jpg}",
                    "*.html",
                    "manifest.webmanifest",
                    // be careful, not to add sw.js
                ],
            },
            manifest: {
                name: "Omega Educacional",
                short_name: "Omega Edu",
                start_url: "/",
                lang: "pt-br",
                background_color: "#ffffff",
                theme_color: "#52823c",
                display: "standalone",
                icons: [
                    {
                        src: "icon-48x48.png",
                        sizes: "48x48",
                        type: "image/png",
                    },
                    {
                        src: "icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icon-256x256.png",
                        sizes: "256x256",
                        type: "image/png",
                    },
                    {
                        src: "icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
        legacy({
            targets: ["defaults", "not IE 11"],
        }),
    ],
});
