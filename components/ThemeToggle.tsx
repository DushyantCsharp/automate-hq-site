"use client";
import { useTheme } from "next-themes"; import { Moon, Sun } from "lucide-react"; import { useEffect, useState } from "react";
export default function ThemeToggle(){ const {setTheme,resolvedTheme}=useTheme(); const [m,setM]=useState(false); useEffect(()=>setM(true),[]); if(!m) return null; const d=resolvedTheme==="dark";
  return <button aria-label="Toggle theme" onClick={()=>setTheme(d?"light":"dark")} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5" style={{borderColor:d?"rgba(255,255,255,.15)":"rgba(0,0,0,.12)"}}>{d?<Sun size={16}/>:<Moon size={16}/>}<span className="hidden sm:inline">{d?"Light":"Dark"} mode</span></button>;
}
