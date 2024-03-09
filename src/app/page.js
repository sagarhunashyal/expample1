'use client'
import Image from "next/image";
import cx from 'classnames';
import styles from '../styles/Signin.module.css';
import Button from "@/components/Button";
import { useState } from "react";


export default function Home() {
  const [name, setName] = useState('Name here');

  async function confirmButton(name) {
    const apis = {
      dataAge: 'https://api.agify.io?name=meelad',
      dataGender: "https://api.genderize.io?name=luc",
      dataCountry: "https://api.nationalize.io?name=nathaniel"
    }
    try {
      setName(await Button(name, apis));
    } catch (e) {
      console.log(`An error occured: ${e}`);
      return;
    }
    alert("Got new activity!");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by guessing Age,Gender,Country&nbsp;
          <code className="font-mono font-bold">By using input name as parameter</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Sagar Hunashyal
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
        <form>
          <div className="form-floating">
            <input
              value={name}
              onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <button style={{
              margin: '10px',
              borderWidth: 1,
              borderColor: '#333333',
              marginTop: '30px',
              height: '30px',
              width: '100px',
              color: 'red'
            }}
              onClick={() => confirmButton(name)}>Click Me!</button>
          </div>
        </form>
      </main>
    </main>
  );
}
