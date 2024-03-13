// 'use client';

import Image from 'next/image';

/**
 * 
 * @param {string} src - The image source
 * @param {string} alt - The image alt text
 * @param {number} width - The image width
 * @param {number} height - The image height
 * @param {string} className - The image class name
 * @returns - An image component
 */

export default function NextImg({ src, alt, width = 500, height = 500, className = "" }) {
    return (
        // <Image src={src} alt={alt} fill />
        <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            />
    );
}