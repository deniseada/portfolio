import Footer from "@/ui/footer/page";
import NavBar from "../../ui/nav-bar/page";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className={styles.container}>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and learn more about me.</p>
      </main>
      <Footer />
    </div>
  );
}
