import React,{useState,useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const url = `https://assihelp-backend.vercel.app/`;

const StylishForm = (props) => {

  

  const [file, setFile] = useState(null);

const handleFileChange = (e) => {
  console.log(e.target.files)
    setFile(e.target.files[0]);
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("subject", props.name);
    formData.append("contribute", file);

    try {
        const response = await fetch(url+'/user/upload', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log(data);
        setFile(null);
        e.target.reset();
        toast.success('Your Assignment is Submitted! Please Refresh the page', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
       
          });
        
    } catch (error) {
        console.error("Error:", error);
    }
};

  return (
    
      <form
        method='post'
        action={url+`/user/upload`}
        encType='multipart/form-data'
        onSubmit={(e)=>{
          handleSubmit(e)
        }}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Contribute Your Assignment</h2>
        
        <div className="mb-4">
          <label
            htmlFor={`${props.name}`}
            className="block text-sm font-medium text-gray-600 mb-2 hover:cursor-pointer"
          >
            Note - * Please choose pdf file only
          </label>
          <input type="text" name="subject" defaultValue={`${props.name}`} className='hidden'/>
          <input
            name="contribute"
            id={`${props.name}`}
            type="file"
            onChange={(e)=>{
              handleFileChange(e)
            }}
            className="block w-full text-sm text-gray-600 file:border file:border-gray-300 file:py-2 file:px-4 file:rounded file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:cursor-pointer"
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 hover:cursor-pointer"

        >
          Submit
        </button>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={true}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      </form>
   
  );
};

export default StylishForm;
