'use client';
import {useState} from 'react';

export default function Home(){
  const [file,setFile] = useState(null);
  const [loading,setLoading] = useState(false);
  const [result,setResult] = useState(null);
  
  const handleSubmit = async () => {
    if(!file) return alert('photo select ಮಾಡು');
    setLoading(true);
    const fd = new FormData();
    fd.append('file',file);
    const res = await fetch('/api/caption',{method:'POST',body:fd});
    setResult(await res.json());
    setLoading(false)
  };
  
  return(
    <main style={{padding:20, fontFamily:'Arial', textAlign:'center'}}>
      <h1>AI Caption Creator 🚀</h1>
      <p>Photo upload ಮಾಡಿ
