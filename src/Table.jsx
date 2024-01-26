import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/table.glb')
  const woodMaterial = <meshStandardMaterial attach="material" color="#8B4513" />;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} material-color="#8B4513"/>
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material}  material-color="#8B4513"/>
    </group>
  )
}

useGLTF.preload('/table.glb')
