'use client';
import styles from './page.module.css'
import { useState } from 'react'
export default function Home() {

  const [result, set_result] = useState( );
  const [input1, set_input1] = useState( );
  const [input2, set_input2] = useState( );

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.input_div}>
            <input type='number' value={input1}
            onInput={(e)=>{
              set_input1(e.target.value)
              set_result(e.target.value/((input2/100)*(input2/100)))
            }}
            />
          </div>
        </div>
        <div className={styles.box+" "+styles.operation_box}
        onClick={()=>{
          set_result(input1/input2)
        }}
        >
          <svg width="35px" height="35px" viewBox="0 0 136 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 75.5H136" stroke="black" stroke-width="23"/>
          <path d="M49 20V19.5C49 9.00659 57.5066 0.5 68 0.5C78.4934 0.5 87 9.00659 87 19.5V20C87 30.4934 78.4934 39 68 39C57.5066 39 49 30.4934 49 20Z" fill="black" stroke="black"/>
          <path d="M49 130.5V130C49 119.507 57.5066 111 68 111C78.4934 111 87 119.507 87 130V130.5C87 140.993 78.4934 149.5 68 149.5C57.5066 149.5 49 140.993 49 130.5Z" fill="black" stroke="black"/>
          </svg>

        </div>
        <div className={styles.box}>
          <div className={styles.input_div}>
            <input type='number' value={input2}
             onInput={(e)=>{
              set_input2(e.target.value)
              set_result(input1/((e.target.value/100)*(e.target.value/100)))
            }}
            />
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.input_div}>
            <input type='number' readOnly value={result}/>
          </div>
        </div>
      </div>
    </div>
  )
}
