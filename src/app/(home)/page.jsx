import styles from "./page.module.scss";
import HomeHeader from "@/components/home/HomeHeader";
export const metadata = {
  title: "Software Company",
  description: "Welcome to software company",
};

export default function HomePage() {
  return (
    <>
      <HomeHeader />
    </>
  );
}
