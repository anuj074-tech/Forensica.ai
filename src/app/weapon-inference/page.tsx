import { PageHeader } from "@/components/page-header";
import { WeaponInferenceClient } from "./weapon-inference-client";

export default function WeaponInferencePage() {
  return (
    <div>
      <PageHeader
        title="Weapon Inference"
        description="Infer weapon characteristics based on wound data, scene descriptions, and evidence photos."
      />
      <WeaponInferenceClient />
    </div>
  );
}
