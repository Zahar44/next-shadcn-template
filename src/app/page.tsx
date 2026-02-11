import { Skeleton } from "@/components/common/skeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      {/* Replace single skeleton with Sections where each section is a separate file which uses skeleton component*/}
      <Skeleton className="h-50 w-3/4" />
    </main>
  );
}
