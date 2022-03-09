import Header from "./components/Header";
import Hero from "./components/Hero";
import Body from "./components/Body";
import Footer from "./components/Footer";

const task = [
  
    {
      id:1,
      name:'Birimumaaso Rogers',
      tasks:'Set birthday',
      day:'Febraury 4th at 2:00pm'
    },
    {
      id:2,
      name:'Birimumaaso Rogers',
      tasks:'Set birthday',
      day:'Febraury 4th at 2:00pm'
    },
    {
      id:3,
      name:'Birimumaaso Rogers',
      tasks:'Set birthday',
      day:'Febraury 4th at 2:00pm'
    },
  
]


function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Body tasks={task}/>
      <Footer />
    </div>
  );
}

export default App;
