import { trainingProgram } from "@/lib/training-program";

export function BusinessSetupChecklist() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {trainingProgram.inclusions.map((item) => (
        <div key={item.id} className="card-float p-6">
          <h3 className="font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
