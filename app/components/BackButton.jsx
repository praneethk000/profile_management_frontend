'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center space-x-1 p-2"
        >
            <IoIosArrowBack className="h-4 w-4" />
            <span>Go Back</span>
        </button>
    );
}
