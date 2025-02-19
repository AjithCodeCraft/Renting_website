
import About from "./components/About";
import Header from "./components/Header";



export default function Home() {
  return (
    <><div className="sticky top-0 z-50 bg-white shadow-md">
      <Header />
    </div>
    <About />
    
    </>
  );
}
