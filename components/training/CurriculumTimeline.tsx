import { trainingProgram } from "@/lib/training-program";

export function CurriculumTimeline() {
  return (
    <ol className="space-y-4">
      {trainingProgram.curriculum.map((day) => (
        <li key={day.day} className="card-float p-6 md:p-8">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Day {day.day}
            </span>
            <h3 className="text-lg font-semibold text-foreground md:text-xl">
              {day.title}
            </h3>
          </div>
          <p className="mt-3 text-muted leading-relaxed">{day.summary}</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {day.topics.map((topic) => (
              <li key={topic} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
