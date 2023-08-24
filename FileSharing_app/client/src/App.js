import './App.css';
import { useRef,useState,useEffect } from 'react';
import { uploadFile } from './services/api';

function App() {
const banner_img = "https://c4.wallpaperflare.com/wallpaper/8/983/735/black-4k-blue-lines-wallpaper-preview.jpg";

const fileInputRef = useRef();

const [fileInput,setFileInput] = useState('');
const [result,setResult] = useState('');

const onUploadClick = () =>{
   fileInputRef.current.click();
}

useEffect(()=>{
const getImage = async() =>{
   if(fileInput){
    const data = new FormData();
    data.append("name",fileInput.name);
    data.append("file",fileInput);

    let response = await uploadFile(data);
    setResult(response.path);

   }
}
getImage();
},[fileInput])

  return (
    <div className="container">
     <img src={banner_img} alt='banner'/>
     <div className='wrapper'>
     <h1>Simple File Share App</h1>
     <p>Upload your files and get the download link and share with your friends😉</p>

     <button onClick={()=> onUploadClick()}>Upload </button>
     <input type='file'
        ref={fileInputRef}
        style={{display:'none'}}
        onChange={(e)=>setFileInput(e.target.files[0])}
     />


     <a href={result}>{result}</a>
     </div>
    </div>
  );
}

export default App;
