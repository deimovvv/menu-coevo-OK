/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 --transform pepperoni.glb 
Files: pepperoni.glb [20.89MB] > /Users/gonzalo/Desktop/template-ecommerce-react-three-fiber-main/public/models/pepperoni-transformed.glb [577.54KB] (97%)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';

export function Pepperoni(props) {
  const { nodes, materials } = useGLTF('/models/pepperoni-transformed.glb')
 /*  const refModel = useRef();
  useEffect(() => {
    if (props.inView){
      gsap.to(refModel.current.scale, {x: 1, y: 1, z: 1, duration: 2})
    }else{
      gsap.to(refModel.current.scale, {x: 0.7, y: 0.7, z: 0.7, duration: 2})

    }
  }, [props.inView]); */
  return (
    <group {...props} dispose={null}  /* scale={[0.1,0.1,0.1]} *//*  ref={refModel} */>
      <mesh geometry={nodes.Mesh_0.geometry} material={materials.Material_0} scale={3.5} />
    </group>
  )
}

useGLTF.preload('/models/pepperoni-transformed.glb')
