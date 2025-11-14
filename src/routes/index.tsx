import { createFileRoute } from '@tanstack/react-router';
//@ts-ignore
import { useState, useRef } from 'react'
import Header from '../Custom-Elements/Header.tsx';
import Input from '../Custom-Elements/Input.tsx';
//@ts-ignore
import Eq from '../Custom-Elements/Equation-Element.tsx';
import '../styles.css'

 
export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {


  return (
    <>
      <div>
        <Header />
        <Input />
      </div>
    </>
  )
}