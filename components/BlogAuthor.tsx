import Image from "next/image";

export function BlogAuthor() {
  return (
    <div className="mt-8 flex items-center gap-4 rounded-lg border border-border bg-card p-4">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <Image
          src="/images/connor.JPG"
          alt="Connor"
          fill
          className="object-cover"
          sizes="48px"
        />
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">
          Written by Connor, WRPX Kitchen Wrapping Specialist
        </p>
      </div>
    </div>
  );
}
