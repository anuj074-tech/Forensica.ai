import { PageHeader } from "@/components/page-header";
import { SuspectRankingClient } from "./suspect-ranking-client";

export default function SuspectRankingPage() {
  return (
    <div>
      <PageHeader
        title="Suspect Ranking"
        description="Analyze crime details, victim info, and social graphs to rank suspects by motive and opportunity."
      />
      <SuspectRankingClient />
    </div>
  );
}
