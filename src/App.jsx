import { useState } from 'react';
import reqGroqAi from './utils/groq';
import { Light } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './App.css';

function App() {
  const [inputVal, setInputVal] = useState('');
  const [data, setData] = useState("")

  async function handleClick(e){
    e.preventDefault();
    const aiGroq = await reqGroqAi(inputVal);
    setData(aiGroq)
  }
  return(
  <main className='flex flex-col min-h-[80vh] justify-center items-center max-w-xl w-full mx-auto'>
    <h1 className='text-4xl text-slate-700'>React Js Ai With Groq</h1>
    <form action="" className='flex flex-col gap-4 py-4 w-full'>
      <input type="text" placeholder='Ketikan Sesuatu' className='py-2 px-5 rounded-md' id="content" value={inputVal} onChange={(e) => setInputVal(e.target.value)}/>
      <button onClick={handleClick} type="submit" name='submit' className='bg-indigo-600 rounded-md font-bold text-white py-2 px-4'>Kirim Sesuatu</button>
    </form>
    <div className='max-w-xl w-full mx-auto'>
      {data ? (
    <Light wrapLongLines={true} language='swift' style={darcula} className='text-white text-xl'>
      {data.toString()}
    </Light>
      ) : null}
    </div>
  </main>
  );
}

export default App
