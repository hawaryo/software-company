import HomeHeader from "@/components/home/HomeHeader";
import FeaturesSection from "@/components/home/FeaturesSection";
import DetailsSection from "@/components/home/DetailsSection";
import PricingSection from "@/components/home/PricingSection";
import FeedbackSection from "@/components/home/FeedbackSection";
import QuestionSection from "@/components/home/QuestionSection";
import TeamSection from "@/components/home/TeamSection";
import InsightsSection from "@/components/home/InsightsSection";


export const metadata = {
  title: "Software Company",
  description: "Welcome to software company",
};

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <main>
        <FeaturesSection />
        <DetailsSection />
        <PricingSection />
        <FeedbackSection />
        <QuestionSection />
        <TeamSection />
        <InsightsSection />
      </main>
    </>
  );
}
