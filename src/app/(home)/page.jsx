import styles from "./page.module.scss";
import HomeHeader from "@/components/home/HomeHeader";
import FeaturesSection from "@/components/home/FeaturesSection";
import DetailsSection from "@/components/home/DetailsSection";
import PricingSection from "@/components/home/PricingSection";
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
      </main>
    </>
  );
}
