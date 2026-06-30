import { getStageById, type StageColor } from "@/lib/jarvis-types";

const COLOR_CLASS: Record<StageColor, string> = {
  lime: "jarvis-pill-lime",
  grey: "jarvis-pill-grey",
  amber: "jarvis-pill-amber",
  yellow: "jarvis-pill-yellow",
  green: "jarvis-pill-green",
  blue: "jarvis-pill-blue",
  teal: "jarvis-pill-teal",
  purple: "jarvis-pill-purple",
  pink: "jarvis-pill-pink",
  orange: "jarvis-pill-orange",
  red: "jarvis-pill-red",
  olive: "jarvis-pill-olive",
  gold: "jarvis-pill-gold",
};

export function StagePill({ stageId }: { stageId: string }) {
  const stage = getStageById(stageId);

  return (
    <span className={`jarvis-pill ${COLOR_CLASS[stage.color]}`}>
      {stage.label}
    </span>
  );
}
