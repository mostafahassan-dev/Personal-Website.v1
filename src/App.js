import { useEffect, useState } from 'react';
import "./App.css"
import {Layout}  from './containers';
import { Archive, Loader, Portfolio } from './components';
import {fetchFromAPI} from './utils/fetchFromAPI';
import { Route, Routes } from 'react-router-dom';
import Certifications from './components/certifications/Certifications';
import ScrollRestore from './components/ScrollRestore';



function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI();
        setData(data);
        
      } catch (error) {
        console.log('Error fetching data:',error);
      }
    };

    fetchData();
  }, []);

if (!data) return <Loader/>
  return ( 
    <>
      { loading 
      ? (<Loader/>) 
      : (
        
        <>
        <ScrollRestore/>
        <Routes>
          <Route path="/" element={<Layout data={data} />} />
          <Route path="/archive" element={<Archive data={data}/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
        </Routes>
        </>
      )
      }

     

    </>
   );
}

export default App;
