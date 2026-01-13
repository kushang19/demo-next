import { serverSideFunction } from "../utill/server-util"

export default function ServerRoute(){
    const result = serverSideFunction()
    return <h1>Server Route - {result}</h1>
}