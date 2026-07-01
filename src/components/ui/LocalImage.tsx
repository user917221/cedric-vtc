"use client";

import Image, { type ImageProps } from "next/image";

type LocalImageProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function LocalImage({
  src,
  alt,
  width = 1600,
  height = 1000,
  sizes = "(max-width: 768px) 100vw, 50vw",
  style,
  ...props
}: LocalImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      draggable={false}
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        ...style,
      }}
      {...props}
    />
  );
}
