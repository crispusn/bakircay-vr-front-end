import { Form, Input, Label, Submit } from "r3f-form";
import { useThree } from "@react-three/fiber";
import React, { useState, useRef } from "react";
import { Interactive, toggleSession } from "@react-three/xr";
import { Html } from "@react-three/drei";
function LoginBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { size } = useThree();
  const aspect = size.width / size.height;
  const boxWidth = 14;
  const boxHeight = 8;

  const handleClick = async () => {
    const session = await toggleSession("immersive-vr");
    if (session) {
      console.log("VR session başlatıldı!");
    } else {
      console.log("VR session sonlandırıldı!");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    console.log("Username:", event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("Password:", event.target.value);
  };

  const handleSubmit = () => {
    console.log("Kullanıcı adı:", username);
    console.log("Şifre:", password);
    console.log("Login butonuna tıklandı!");
  };

  const formWidth = 6;
  const formHeight = 2.5;

  const formPosX = -formWidth / 2;
  const formPosY = formHeight / 2 - 0.5;

  return (
    <group position={[0, 0, 2]}>
      <Form position={[formPosX, formPosY, 0]} onSubmit={handleSubmit}>
        <Label text="Kullanıcı Adı" position={[0, 0.6, 0]} color="black" />
        <Interactive
          onSelectStart={() => console.log("Username alanına tıklandı")}
        >
          <Input
            selectionColor={"red"}
            name="username"
            position={[0, 0.4, 0]}
            width={3}
            height={0.5}
            backgroundColor={"black"}
            onChange={handleUsernameChange}
          />
        </Interactive>

        <Label text="Şifre" position={[0, -0.4, 0]} color="black" />
        <Interactive
          onSelectStart={() => console.log("Password alanına tıklandı")}
        >
          <Input
            name="password"
            type="password"
            position={[0, -0.6, 0]}
            width={3}
            height={0.5}
            backgroundColor={"black"}
            onChange={handlePasswordChange}
          />
        </Interactive>
        <Interactive onSelectStart={handleClick}>
          <Html
            position={[0, -1.2, 0]} // Yeni pozisyon
            width={6} // Genişlik ayarı
            height={0.2}
            rotation={[0, Math.PI, 0]}
            fontSize={20}
            color="white"
          >
            <button onClick={handleClick}>Login</button>
          </Html>
        </Interactive>
      </Form>
    </group>
  );
  // //  position={[0, -1, 0]}
  // width={3}
  // height={0.2}
}

export default LoginBar;
