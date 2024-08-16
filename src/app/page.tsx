import Content from "@/app/Components/Content";
import Expert from "@/app/Components/Expert";
import Feature from "@/app/Components/Feature";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import Hero from "@/app/Components/Hero";
import Letter from "@/app/Components/Letter";
import Special from "@/app/Components/Special";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Content />
      <Expert />
      <Special />
      <Letter />
      <Footer />
    </div>
  );
}
