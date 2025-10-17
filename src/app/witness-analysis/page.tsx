import { PageHeader } from "@/components/page-header";
import { WitnessAnalysisClient } from "./witness-analysis-client";

export default function WitnessAnalysisPage() {
  return (
    <div>
      <PageHeader
        title="Witness Statement Analysis"
        description="Analyze witness statements for summaries, deception scores, and key inconsistencies."
      />
      <WitnessAnalysisClient />
    </div>
  );
}
