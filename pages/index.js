import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import person from "../images/icon-person.svg"
import { useEffect, useState } from 'react'

export default function Home() {
  const [tip,setTip] = useState(0);
  const [total,setTotal] = useState(0);
  const [bill,setBill] = useState(0);
  const [people,setPeople] = useState(0);
  const [custom,setCustom] = useState("custom");

  function Custom(){
    let change = bill/people;
    let percentage = change * custom/100;
    setTip(parseFloat(percentage.toFixed(2)));
    setTotal(parseFloat((change + percentage).toFixed(2)));
  };

  useEffect(function(){
    document.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        Custom();
      }
    });
  })

  function Reset(){
    setBill(0);
    setPeople(0);
    setTip(0);
    setTotal(0);
    setCustom(0);
  }

  return (
    <div className="">
      <div className=' font-bold text-3xl tracking-widest text-center mt-20 text-[#4a6d6f]'>
        SPLI <br />
        TTER
      </div>
      <div className='flex justify-center w-full mt-12'>
        <div className='bg-white rounded-xl w-full lg:w-6/12 shadow-md p-4 lg:p-10 flex flex-col lg:flex-row'>
          <div className=' w-full '>
            <p className='text-[#92a1a2] font-bold'>Bill</p>
            <div className='relative flex items-center bg-[#f3f8fb] rounded-lg mt-4 text-[#3b7a7a]'>
              <p className='absolute ml-3'>$</p>
              <input value={bill} onChange={function(e){
                setBill(e.target.value);
              }} defaultValue={0} type="number" className='bg-[#f3f8fb] w-full text-right px-2 py-1'></input>
            </div>
            <p className='mt-5 text-[#92a1a2] font-bold'>Select Tip %</p>
            <div className=' grid grid-cols-3 gap-5 mt-2'>
              <div onClick={function(){
                let change = bill/people;
                let percentage = change * 0.05;
                setTip(parseFloat(percentage.toFixed(2)));
                setTotal(parseFloat((change + percentage).toFixed(2)));
              }} className='bg-[#00474b] hover:bg-[#26c2ad] cursor-pointer text-white flex items-center justify-center px-2 py-1 rounded-md'>
                <p className='text-2xl'>5%</p>
              </div>
              <div onClick={function(){
                let change = bill/people;
                let percentage = change * 0.1;
                setTip(parseFloat(percentage.toFixed(2)));
                setTotal(parseFloat((change + percentage).toFixed(2)));
              }}  className='bg-[#00474b] hover:bg-[#26c2ad] cursor-pointer text-white flex items-center justify-center px-2 py-1 rounded-md'>
                <p className='text-2xl'>10%</p>
              </div>
              <div onClick={function(){
                let change = bill/people;
                let percentage = change * 0.15;
                setTip(parseFloat(percentage.toFixed(2)));
                setTotal(parseFloat((change + percentage).toFixed(2)));
              }}  className='bg-[#00474b] hover:bg-[#26c2ad] cursor-pointer text-white flex items-center justify-center px-2 py-1 rounded-md'>
                <p className='text-2xl'>15%</p>
              </div>
              <div onClick={function(){
                let change = bill/people;
                let percentage = change * 0.25;
                setTip(parseFloat(percentage.toFixed(2)));
                setTotal(parseFloat((change + percentage).toFixed(2)));
              }}  className='bg-[#00474b] hover:bg-[#26c2ad] cursor-pointer text-white flex items-center justify-center px-2 py-1 rounded-md'>
                <p className='text-2xl'>25%</p>
              </div>
              <div onClick={function(){
                let change = bill/people;
                let percentage = change * 0.5;
                setTip(parseFloat(percentage.toFixed(2)));
                setTotal(parseFloat((change + percentage).toFixed(2)));
              }}  className='bg-[#00474b] hover:bg-[#26c2ad] cursor-pointer text-white flex items-center justify-center px-2 py-1 rounded-md'>
                <p className='text-2xl'>50%</p>
              </div>
              <div id="custom" className='bg-[#f3f8fb] cursor-pointer text-[#637d7b] flex items-center justify-center px-2 py-1 rounded-md'>
                <input onChange={function(e){
                  setCustom(e.target.value);
                }} value={custom} placeholder='Custom' type="number" className='bg-[#f3f8fb] text-2xl w-20'></input>
              </div>
            </div>
            <p className='mt-5 text-[#92a1a2] font-bold'>Number of People</p>
            <div className='relative flex items-center bg-[#f3f8fb] rounded-lg mt-4 text-[#3b7a7a]'>
              <Image className='absolute ml-3' src={person}></Image>
              <input value={people} onChange={function(e){
                setPeople(e.target.value);
              }} defaultValue={0} type="number" className='bg-[#f3f8fb] w-full text-right px-2 py-1'></input>
            </div>
          </div>
          <div className='w-full bg-[#00474b] mt-5 lg:mt-0 lg:ml-5 rounded-xl p-4 lg:p-10'>
            <div className='flex '>
              <div className='w-full'>
                <span className='text-white'>Tip Amount</span>
                <br></br>
                <span className='text-[#3e7075]'>/  person</span>
              </div>
              <div className='text-[#28c0ab] text-4xl w-full relative'>
                {tip %1 === 0
                ?
                <p className=' absolute right-0'>${tip}.00</p>
                :
                <p className=' absolute right-0'>${tip}</p>
                }
              </div>
            </div>
            <div className='flex mt-6'>
              <div className='w-full'>
                <span className='text-white'>Total</span>
                <br></br>
                <span className='text-[#3e7075]'>/  person</span>
              </div>
              <div className='text-[#28c0ab] text-4xl w-full relative'>
                {total %1 === 0
                ?
                <p className=' absolute right-0'>${total}.00</p>
                :
                <p className=' absolute right-0'>${total}</p>
                }
              </div>
            </div>
            <div onClick={Reset} className=' hover:opacity-80 cursor-pointer flex rounded-md items-center justify-center w-full mt-5 lg:mt-40 h-12 text-[#024e4c] text-xl font-bold bg-[#26c2ad]'>RESET</div>
          </div>
        </div>
      </div>
    </div>
  )
}
