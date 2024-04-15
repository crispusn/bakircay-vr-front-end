import { Form, Input, Label, Submit } from "r3f-form";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { Interactive } from "@react-three/xr";

function LoginBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const { size } = useThree();
  const aspect = size.width / size.height;
  const boxWidth = 14;
  const boxHeight = 8;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleInputClick = (ref) => {
    ref.current.focus();
    console.log("Input bara tıklandı!");
  };

  const handleSubmit = (formData) => {
    console.log("Kullanıcı adı:", formData.username);
    console.log("Şifre:", formData.password);
    console.log("Login butonuna tıklandı!"); // Yeni eklendi
    // Giriş işlemlerini gerçekleştir
  };

  const formWidth = 6; // Form genişliği
  const formHeight = 2.5; // Form yüksekliği

  const formPosX = -formWidth / 2; // Formun sol üst köşesinin x konumu
  const formPosY = formHeight / 2 - 0.5; // Formun sol üst köşesinin y konumu

  const inputSpacing = 0.7; // Form elemanları arası boşluk

  return (
    <Interactive>
      <group position={[0, 1, -4]}>
        <mesh position={[0, 0, -1]} scale={[boxWidth, boxHeight, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <Form position={[formPosX, formPosY, 0]} onSubmit={handleSubmit}>
          <Label text="username" position={[0, 0.8, 0]} color="white" />
          <Input
            name="username"
            position={[0, 0.4, 0]}
            width={5}
            height={0.5}
          />

          <Label text="password" position={[0, -0.2, 0]} color="white" />
          <Input
            name="password"
            type="password"
            position={[0, -0.6, 0]}
            width={5}
            height={0.5}
          />
          <Submit value="Login" position={[0, -1, 0]} width={4} height={0.5} />
        </Form>
      </group>
    </Interactive>
  );
}

export default LoginBar;
