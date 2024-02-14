"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Float, Environment} from "@react-three/drei"
import { useRef, useState, useEffect, Suspense } from "react"
import gsap from "gsap"

const Shapes = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-2 md:mt-0 md:col-start-2">Shapes</div>
  )
}

export default Shapes