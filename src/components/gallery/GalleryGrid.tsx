'use client';

import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { GalleryItem } from '@/types/gallery';
import GalleryCard from './GalleryCard';

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem, index: number) => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

export default function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  // Mobile 2 Columns Distribution
  const { mobCol1, mobCol2 } = useMemo(() => {
    const m1: { item: GalleryItem; globalIdx: number }[] = [];
    const m2: { item: GalleryItem; globalIdx: number }[] = [];

    items.forEach((item, idx) => {
      if (idx % 2 === 0) m1.push({ item, globalIdx: idx });
      else m2.push({ item, globalIdx: idx });
    });

    return { mobCol1: m1, mobCol2: m2 };
  }, [items]);

  // Desktop 3 Columns Distribution
  const { deskCol1, deskCol2, deskCol3 } = useMemo(() => {
    const c1: { item: GalleryItem; globalIdx: number }[] = [];
    const c2: { item: GalleryItem; globalIdx: number }[] = [];
    const c3: { item: GalleryItem; globalIdx: number }[] = [];

    items.forEach((item, idx) => {
      if (idx % 3 === 0) c1.push({ item, globalIdx: idx });
      else if (idx % 3 === 1) c2.push({ item, globalIdx: idx });
      else c3.push({ item, globalIdx: idx });
    });

    return { deskCol1: c1, deskCol2: c2, deskCol3: c3 };
  }, [items]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="w-full"
    >
      {/* ── MOBILE 2-COLUMN DYNAMIC MASONRY (< sm) ────────────────────────── */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {/* Column 1 */}
        <div className="flex flex-col gap-3">
          {mobCol1.map(({ item, globalIdx }) => (
            <GalleryCard
              key={item._id}
              item={item}
              index={globalIdx}
              priority={globalIdx === 0}
              onClick={() => onItemClick(item, globalIdx)}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-3">
          {mobCol2.map(({ item, globalIdx }) => (
            <GalleryCard
              key={item._id}
              item={item}
              index={globalIdx}
              priority={globalIdx === 0}
              onClick={() => onItemClick(item, globalIdx)}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP 3-COLUMN DYNAMIC MASONRY (>= sm) ────────────────────── */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {deskCol1.map(({ item, globalIdx }) => (
            <GalleryCard
              key={item._id}
              item={item}
              index={globalIdx}
              priority={globalIdx === 0}
              onClick={() => onItemClick(item, globalIdx)}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {deskCol2.map(({ item, globalIdx }) => (
            <GalleryCard
              key={item._id}
              item={item}
              index={globalIdx}
              priority={globalIdx === 0}
              onClick={() => onItemClick(item, globalIdx)}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="hidden lg:flex flex-col gap-5 lg:gap-6">
          {deskCol3.map(({ item, globalIdx }) => (
            <GalleryCard
              key={item._id}
              item={item}
              index={globalIdx}
              priority={globalIdx === 0}
              onClick={() => onItemClick(item, globalIdx)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
