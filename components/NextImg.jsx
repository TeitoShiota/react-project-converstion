// 'use client';

import Image from 'next/image';

/**
 * 
 * @param {string} src - The image source
 * @param {string} alt - The image alt text
 * @returns - An image component
 */

export default function NextImg({ src, alt }) {
    return (
        // <Image src={src} alt={alt} fill />
        <Image src={src} alt={alt} width={500} height={500} />
    );
}