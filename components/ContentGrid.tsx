"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { ContentCategory, ContentItem } from "@/types";

/** Human labels for each category filter. */
const CATEGORY_LABELS: Record<ContentCategory | "all", string> = {
  all: "All",
  writing: "Writing",
  talk: "Talks",
  media: "Media",
  video: "Video",
};

const FILTERS: (ContentCategory | "all")[] = [
  "all",
  "writing",
  "talk",
  "media",
  "video",
];

/**
 * ContentGrid — a filterable, categorized grid of public-facing content.
 *
 * Items come from `content/contentItems.ts`. The grid derives which filters to
 * show, sorts newest-first, and renders video items with an inline embed when
 * an `embedUrl` is present (falling back to a link card otherwise).
 */
export default function ContentGrid({ items }: { items: ContentItem[] }) {
  const [active, setActive] = useState<ContentCategory | "all">("all");

  // Only show filters that actually have matching content.
  const availableFilters = useMemo(() => {
    const present = new Set<string>();
    items.forEach((it) => it.categories.forEach((c) => present.add(c)));
    return FILTERS.filter((f) => f === "all" || present.has(f));
  }, [items]);

  const visible = useMemo(() => {
    const filtered =
      active === "all"
        ? items
        : items.filter((it) => it.categories.includes(active));
    // Newest first; items without a date sink to the bottom.
    return [...filtered].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  }, [items, active]);

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter content">
        {availableFilters.map((filter) => {
          const isActive = active === filter;
          return (
            <button
              key={filter}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-lapis-500 text-ivory"
                  : "bg-sand-100 text-sand-600 hover:bg-sand-200"
              }`}
            >
              {CATEGORY_LABELS[filter]}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {visible.length === 0 ? (
        <p className="mt-10 text-sand-500">No items in this category yet.</p>
      ) : (
        <motion.ul
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((item) => (
            <ContentCard key={item.id} item={item} />
          ))}
        </motion.ul>
      )}
    </div>
  );
}

function ContentCard({ item }: { item: ContentItem }) {
  const hasVideo = item.categories.includes("video") && !!item.embedUrl;
  const featuredClass = item.featured ? "sm:col-span-2 lg:col-span-2" : "";

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-ivory shadow-sm ${featuredClass}`}
    >
      {hasVideo ? (
        <div className="relative aspect-video w-full bg-sand-100">
          <iframe
            src={item.embedUrl}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-ember-600">
          {item.categories.map((c) => (
            <span key={c}>{CATEGORY_LABELS[c]}</span>
          ))}
          {item.date ? (
            <span className="text-sand-400">
              · {new Date(item.date).getFullYear()}
            </span>
          ) : null}
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-sand-900">
          {item.title}
        </h3>
        {item.source ? (
          <p className="mt-1 text-sm text-sand-500">{item.source}</p>
        ) : null}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-sand-600">
          {item.description}
        </p>

        {item.href && !hasVideo ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-lapis-600 transition-colors hover:text-ember-600"
          >
            View
            <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </motion.li>
  );
}
