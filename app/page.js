import Card from './card.js';
import {data} from './details.js';


export default function Home() {

  return (
    <div className="m-5 p-5">
 
   
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search an item" required />
       
       <div className='grid-cols-2 gap-2'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    

        </div>
        
  </div>
  );
}
