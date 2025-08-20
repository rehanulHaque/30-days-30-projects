import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("llasjgasanbskcnaknk")
  const [copied, setCopied] = useState(false)
  const [range, setRange] = useState(8)
  const [symbol, setSymbol] = useState(false)
  const [number, setNumber] = useState(false)
  const [upper, setUpper] = useState(false)


  const handelCopy = () => {
    setCopied(true)
    window.navigator.clipboard.writeText(password)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }


  const handelGenerate = () => {
    let char = "abcdefghijklmnopqrstuvwxyz"
    if (symbol) char += "!@#$%&*()_-+=:;<,>.?/"
    if (number) char += "0123456789"
    if (upper) char += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    setPassword(Array.from({ length: range }, () => char[Math.floor(Math.random() * char.length)]).join(""))
  }
  useEffect(() => {
    handelGenerate()
  }, [range, symbol, number, upper])
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 flex justify-center items-center">
      <div className="min-w-[400px] p-4 rounded-md border border-gray-600">
        <h1 className="text-2xl font-bold mb-3">Password Generator</h1>
        <div className="flex gap-2 items-center justify-between">
          <div className="bg-gray-200 p-2 rounded w-full">
            {password}
          </div>
          <button onClick={handelCopy} className="bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 rounded">{copied ? <Check/> : <Copy/>}</button>
        </div>
        <div className="flex gap-4 flex-col mt-4">
          <div className="flex justify-between items-center gap-4">
            <input type="range" min={8} max={32} className="w-full" value={range} onChange={(e) => setRange(parseInt(e.target.value))} />
            <p>{range}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Include Symbold</p> <input type="checkbox" onChange={(e) => setSymbol(e.target.checked)} checked={symbol}/>
          </div>
          <div className="flex justify-between items-center">
            <p>Include Numbers</p> <input type="checkbox" onChange={(e) => setNumber(e.target.checked)} checked={number}/>
          </div>
          <div className="flex justify-between items-center">
            <p>Include Upper Case</p> <input type="checkbox" onChange={(e) => setUpper(e.target.checked)} checked={upper}/>
          </div>
          <div>
            <button onClick={handelGenerate} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Generate</button>
          </div>
        </div>
      </div>
    </div>
  )
}
