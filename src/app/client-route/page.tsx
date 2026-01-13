"use client"
import { serverSideFunction } from "../utill/server-util"
export default function ClientRoute(){
    const result = serverSideFunction()
    return <h1>Client Route - {result}</h1>
}