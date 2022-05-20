import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DancingLines from '../utils/index'

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <DancingLines />
      <h1>Is too much this one </h1>


  
    </div>
   
  );
}
