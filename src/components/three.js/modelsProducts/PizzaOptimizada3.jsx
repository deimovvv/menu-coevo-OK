/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 --transform PizzaOptimizada3.glb 
Files: PizzaOptimizada3.glb [133.2KB] > /Users/gonzalo/Desktop/template-ecommerce-react-three-fiber-main/public/models/PizzaOptimizada3-transformed.glb [10.23KB] (92%)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

export function ModelPizza2(props) {
  const { nodes, materials } = useGLTF('/models/PizzaOptimizada3-transformed.glb')
  const refModel = useRef();
  useEffect(() => {
    if (props.inView){
      gsap.to(refModel.current.scale, {x: 1, y: 1, z: 1, duration: 2})
    }else{
      gsap.to(refModel.current.scale, {x: 0.7, y: 0.7, z: 0.7, duration: 2})

    }
  }, [props.inView]);
  return (
    <group {...props} dispose={null} scale={[0.1,0.1,0.1]} ref={refModel}>
      <mesh geometry={nodes.PizzaFungi.geometry} material={materials.Pizza} scale={11.989} />
    </group>
  )
}

useGLTF.preload('/models/PizzaOptimizada3-transformed.glb')
