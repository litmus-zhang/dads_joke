
import { useEffect, useState } from 'react';
import './App.css'
import { MdEmojiEmotions } from "react-icons/md";
import { getJoke } from './util';

function App() {
  const [joke, setJoke] = useState('')

useEffect(() => {
  const fetchJoke = async () => {
    const joke = await getJoke()
    setJoke(joke)
  }

  fetchJoke()
  const intervalId = setInterval(fetchJoke, 45000)

  return () => clearInterval(intervalId)
}, [])

  return (
   <div className="flex flex-col justify-center h-screen items-center">
    <h1 className='my-10 text-4xl font-bold'>
      Chucks' Jokes
    </h1>
    <div className="flex flex-col p-4 border bg-gray-100 justify-center border-green-300 w-[400px] h-[300px] rounded-lg text-center relative">
      <div className="p-3 border rounded-full w-fit absolute -top-4 left-44 shadow-md bg-green-400">
      <MdEmojiEmotions fill='green' />
      </div>
      <p>{joke}</p>
    </div>

    <footer>
      <p className="text-center text-gray-500 mt-4">Made with ❤️ by <a href="https://linkedin.com/in/Lukmon-Abdulsalam" rel='no-referrer' target='_blank' className="text-blue-500">Litmus Zhang</a></p>
    </footer>
   </div>
  )
}

export default App
