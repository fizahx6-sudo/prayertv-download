"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <PageSkeleton />;
  }

  return (
    <div className="animate-in fade-in duration-500">
      {children}
    </div>
  );
}

function PageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-5 w-24" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-10" />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-28 rounded-lg" />
          </div>
          <Skeleton className="h-8 w-8 rounded-md md:hidden" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <Skeleton className="h-7 w-48 rounded-full" />
            <div className="space-y-3 w-full flex flex-col items-center">
              <Skeleton className="h-12 md:h-16 w-3/4" />
              <Skeleton className="h-12 md:h-16 w-1/2" />
            </div>
            <div className="space-y-2 w-full flex flex-col items-center">
              <Skeleton className="h-5 w-4/5 max-w-xl" />
              <Skeleton className="h-5 w-3/5 max-w-xl" />
            </div>
            <div className="flex gap-3 mt-4">
              <Skeleton className="h-11 w-40 rounded-lg" />
              <Skeleton className="h-11 w-32 rounded-lg" />
            </div>
            <div className="flex gap-6 mt-6">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Features skeleton */}
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center mb-12">
            <Skeleton className="h-9 w-48 mb-4" />
            <Skeleton className="h-5 w-80" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="p-6 rounded-lg border border-border/50">
                <Skeleton className="h-10 w-10 rounded-md mb-4" />
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
