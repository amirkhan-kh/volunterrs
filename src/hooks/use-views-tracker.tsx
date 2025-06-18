// hooks/use-view-tracker.ts
import { useEffect, useState } from "react";

export const useViewTracker = (id: number | string) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const key = `viewed-${id}`;
    const viewsStr = localStorage.getItem(key);
    const currentViews = viewsStr ? parseInt(viewsStr) : 0;
    const newViews = currentViews + 1;

    localStorage.setItem(key, newViews.toString());
    setViews(newViews);
  }, [id]);

  return views;
};
