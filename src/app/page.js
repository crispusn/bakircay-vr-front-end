"use client";
import * as THREE from "three";
import LoginBar from "@/components/LoginBar";
import React, { useState } from "react";
import { VRButton, XR, Controllers } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import Image from "next/image";
import { Form, Input, Label, Submit } from "r3f-form";

export default function Home() {
  const [isVRActive, setIsVRActive] = useState(false);

  const handleVRButtonClick = () => {
    setIsVRActive(true);
  };

  const [inputText, setInputText] = useState("Initial content");

  function handleOnChange(e) {
    setInputText(e.target.value);
  }

  return (
    <>
      {/* Sanal Gerçeklik Butonu */}
      <VRButton onClick={handleVRButtonClick} />
      {/* Koşullu render için Canvas bileşenini kullanıyoruz */}
      {isVRActive ? (
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onCreated={({ gl, scene, camera }) => {
            gl.setSize(window.innerWidth, window.innerHeight);
            // VR modunda daha gerçekçi bir görüntü elde etmek için perspektif kamerasını ayarlayalım
            scene.background = new THREE.Color(0x000000); // Arka plan rengini beyaz yapalım
            scene.fog = new THREE.Fog(0x000000, 0, 20); // Sis ekleyerek renk geçişini yumuşatalım // Arka plan rengini beyaz yapalım

            camera.position.set(0, 1.6, 0);
          }}
        >
          {/* XR bileşeni, artırılmış veya sanal gerçeklik özelliklerini sağlar */}
          <XR>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} position={[5, 5, 5]} />
            <SimpleGround />
            <OrbitControls />
            <Environment preset="park" />
            <Controllers />
            <LoginBar />

            {/* <Form>
              <Label text="username" />
              <Input name="username" />

              <Label text="password" />
              <Input name="password" type="password" />

              <Submit value="Login" />
            </Form> */}
            <SidePlates />
          </XR>
        </Canvas>
      ) : (
        <Image src="next.svg" alt="VR" width={100} height={100} />
      )}
    </>
  );
}

// Basit zemin bileşeni
function SimpleGround() {
  const texture = useTexture("/gradient.png");

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// Giriş barı bileşeni
// function LoginBar() {
//   return (
//     <mesh position={[0, 1, -4]} scale={[14, 8, 0.1]}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="black" />
//     </mesh>
//   );
// }

// Sağ ve sol plaka bileşeni
function SidePlates() {
  const texture = useTexture("/gradient.png");

  return (
    <>
      {/* Sağ plaka */}
      <mesh position={[9, 1, 0]} scale={[0.1, 8, 14]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      {/* Sol plaka */}
      <mesh position={[-9, 1, 0]} scale={[0.1, 8, 14]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}
