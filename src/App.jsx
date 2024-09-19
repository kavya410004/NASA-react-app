import Footer from "./components/Footer"
import SideBar from "./components/SideBar"
import Main from "./components/Main"
import { useEffect, useState } from "react"

function App() {
  const [data,  setData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  function handleToggleModal(){
    setShowModal(!showModal)
  }

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setLoading(false); 
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [data]);

  useEffect(() => {
    async function getAPIData(){
      const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      if(localStorage.getItem(localKey)){
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched data from cache");
        return;
      }

      localStorage.clear();
      try{
        const res = await fetch(url);
        const apiData = await res.json();
        
        localStorage.setItem(localKey, JSON.stringify(apiData));

        setData(apiData);
        console.log("Fetched data from API");
      }catch(err){
        console.log(err.message);
      }
    }
    getAPIData();
  }, []);
  return (
    <>
      {!loading ? (
        <Main data={data} />
      ) : (
        <div className="loading-state">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      { showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal}/>
      )}
      
      { data && (
        <Footer data = {data} handleToggleModal={handleToggleModal}/>
      )}
      
    </>
  )
}

export default App
