import Activities from "@/containers/Main/Activities";
import Advert from "@/containers/Main/Advert";
import Contact from "@/containers/Main/Contact";
import Trial from "@/containers/Main/Trial";

export default function Home() {
  return (
    <main>
      <Activities />
      <Trial />
      <Advert />
      <Contact />
    </main> 
  );
}
