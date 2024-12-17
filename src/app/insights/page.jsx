import MainSection from "@/components/insights/MainSection";
import CardsSection from "@/components/insights/CardsSection";
import SubscriptionSection from "@/components/insights/SubscriptionSection"
// import styles from "./page.module.scss";
export const metadata = {
  title: "Insights",
  description: "learn more about software company",
};

export default function InsightsPage() {
  return (
    <>
      <MainSection />
      <CardsSection/>
      <SubscriptionSection/>
    </>
  );
}
