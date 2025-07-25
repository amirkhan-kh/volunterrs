import { useEffect, useRef, useState } from "react";

export const useViewCounter = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){

                    setViewCount((prev) => prev + 1)
                }
            }, 
            {threshold: 0.5,
        )
    }, [])
}