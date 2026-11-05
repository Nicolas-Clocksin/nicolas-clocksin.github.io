import Header from "./components/header/Header";
import About from "./components/about/About";

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
