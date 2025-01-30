import { useEffect, useState } from 'react'
import './App.css'
import StylishForm from './components/stylishform'
const url = `http://localhost:3000`;

function App() {
  const [dsa,setdsa] = useState(null);
  const [math,setmath] = useState(null);
  const [web,setweb] = useState(null);
  const [eee,seteee] = useState(null);
  const [elec,setelec] = useState(null);
  useEffect(()=>{
    
      async function fetchdata(sub, setState) {
        const response = await fetch(url + `/user/` + sub);
        const data = await response.json();
        console.log(data);
        setState(data);
      }
      fetchdata("dsa", setdsa);
      fetchdata("maths", setmath);
      fetchdata("web", setweb);
      fetchdata("eee", seteee);
      fetchdata("electronic", setelec);
    }, []);

  return (
    
    <>
       
    
    <div className="bg-slate-900 min-h-screen w-screen">
      <div className='text-white text-4xl font-extrabold p-4 text-center'>Assignment Helper for CSE-Department</div>
      <div className='flex flex-wrap justify-center'>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white h-full rounded-2xl p-4'>
            <div className='text-center text-2xl font-bold mb-4'>DSA - Assignments</div>
            <StylishForm name="dsa"/>
            <h1 className='font-bold text-2xl mt-4'>Uploaded files Here 👇</h1>
            <div>
              
                <ul className='h-32 overflow-y-scroll'>
                {dsa && dsa.map((val, idx) => (
                    <li key={idx} className='text-blue-700 m-2 overflow-hidden p-2 text-center rounded-xl bg-slate-200 hover:bg-slate-300 font-medium underline'><a href={val.file} className='p-3'>{val.file}</a></li>
                  ))}
                </ul>
                
              
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white h-full rounded-2xl p-4'>
            <div className='text-center text-2xl font-bold mb-4'>Maths - Tutorial</div>
            <StylishForm name="maths"/>
            <h1 className='font-bold text-2xl mt-4'>Uploaded files Here 👇</h1>
            <div>
              
                <ul className='h-32 overflow-y-scroll'>
                {math && math.map((val, idx) => (
                    <li key={idx} className='text-blue-700 m-2 overflow-hidden p-2 text-center rounded-xl bg-slate-200 hover:bg-slate-300 font-medium underline'><a href={val.file} className='p-3'>{val.file}</a></li>
                  ))}
                </ul>
                
              
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white h-full rounded-2xl p-4'>
            <div className='text-center text-2xl font-bold mb-4'>Web - Assignments</div>
            <StylishForm name="web"/>
            <h1 className='font-bold text-2xl mt-4'>Uploaded files Here 👇</h1>
            <div>
              
                <ul className='h-32 overflow-y-scroll'>
                {web && web.map((val, idx) => (
                    <li key={idx} className='text-blue-700 m-2 overflow-hidden p-2 text-center rounded-xl bg-slate-200 hover:bg-slate-300 font-medium underline'><a href={val.file} className='p-3'>{val.file}</a></li>
                  ))}
                </ul>
                
              
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white h-full rounded-2xl p-4'>
            <div className='text-center text-2xl font-bold mb-4'>EEE Lab</div>
            <StylishForm name="eee"/>
            <h1 className='font-bold text-2xl mt-4'>Uploaded files Here 👇</h1>
            <div>
              
                <ul className='h-32 overflow-y-scroll'>
                {eee && eee.map((val, idx) => (
                    <li key={idx} className='text-blue-700 m-2 overflow-hidden p-2 text-center rounded-xl bg-slate-200 hover:bg-slate-300 font-medium underline'><a href={val.file} className='p-3'>{val.file}</a></li>
                  ))}
                </ul>
                
              
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
          <div className='bg-white h-full rounded-2xl p-4'>
            <div className='text-center text-2xl font-bold mb-4'>Electronics - Lab</div>
            <StylishForm name="electronic"/>
            <h1 className='font-bold text-2xl mt-4'>Uploaded files Here 👇</h1>
            <div>
              
                <ul className='h-32 overflow-y-scroll'>
                {elec && elec.map((val, idx) => (
                    <li key={idx} className='text-blue-700 m-2 overflow-hidden p-2 text-center rounded-xl bg-slate-200 hover:bg-slate-300 font-medium underline'><a href={val.file} className='p-3'>{val.file}</a></li>
                  ))}
                </ul>
                
              
            </div>
          </div>
        </div>
      </div>
      <div className='text-white text-center'>&copy; Copyrigth 2025 - AssignmentHelper.com</div>
    </div>
  </>
    
  )
}

export default App
