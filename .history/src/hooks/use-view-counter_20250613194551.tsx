import { useEffect, useRef, useState } from "react";

export const useViewCounter = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) =
        )
    }, [])
}