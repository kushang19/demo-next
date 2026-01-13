"use client"

import { clientSideFunction } from "../utill/client-util"


export default function ClientRoute(){
    const result = clientSideFunction()
    return <h1>Client Route - {result}</h1>
}