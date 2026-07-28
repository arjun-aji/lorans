'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GalleryItem } from '@/types/gallery';
import { ImageCard } from './ImageCard';
import { VideoCard } from './VideoCard';

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  priority?: boolean;
  aspectClass?: string;
  onClick: () => void;
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

export default function GalleryCard({
  item,
  index,
  priority = false,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative w-full"
      layout
    >
      {item.media_type === 'video' ? (
        <VideoCard item={item} index={index} onClick={onClick} />
      ) : (
        <ImageCard item={item} index={index} priority={priority} onClick={onClick} />
      )}
    </motion.div>
  );
}
