"use client";
import * as THREE from "three";
import LoginBar from "../components/LoginBar";
import React, { useState } from "react";
import { VRButton, XR, Controllers } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import Image from "next/image";
import { Form, Input, Label, Submit } from "r3f-form";
import SimpleGround from "../components/Ground";
import SidePlates from "../components/SidePlates";
import { XrUi, Layer } from "react-xr-ui";

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
            scene.background = new THREE.Color(0x000000);
            scene.fog = new THREE.Fog(0x000000, 0, 20);

            camera.position.set(0, 1.6, 0);
          }}
        >
          <XR>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} position={[5, 5, 5]} />
            <SimpleGround />
            <OrbitControls />
            <Environment preset="park" />
            <Controllers />

            <SidePlates />
          </XR>
        </Canvas>
      ) : (
        <Canvas
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <XR>
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} position={[5, 5, 5]} />
            <SimpleGround />
            <OrbitControls />
            <Environment preset="park" />
            <Controllers />
            <LoginBar />

            <SidePlates />
          </XR>
        </Canvas>
      )}
    </>
  );
}

function Scene() {
  return (
    <group position={[0, 1, -1.88]}>
      <Layer
        width={1}
        height={1}
        backgroundColor="crimson"
        borderRadius={0.1}
        borderWidth={0.02}
        borderColor="#222222"
      />
    </group>
  );
}
