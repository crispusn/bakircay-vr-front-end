import { Form, Input, Label, Submit } from "r3f-form";
import { useThree } from "@react-three/fiber";
import React, { useState } from "react";
import { Interactive } from "@react-three/xr";

function LoginBar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { size } = useThree();
  const aspect = size.width / size.height;
  const boxWidth = 14;
  const boxHeight = 8;

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
    <group position={[0, 1, -2]}>
      <mesh position={[0, 0, -1]} scale={[boxWidth, boxHeight, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <Form position={[formPosX, formPosY, 0]} onSubmit={handleSubmit}>
        <Label text="username" position={[0, 0.8, 0]} color="white" />
        <Interactive
          onSelectStart={() => console.log("Username alanına tıklandı")}
        >
          <Input
            selectionColor={"red"}
            name="username"
            position={[0, 0.4, 0]}
            width={5}
            height={0.5}
            onChange={handleUsernameChange}
          />
        </Interactive>

        <Label text="password" position={[0, -0.2, 0]} color="white" />
        <Interactive
          onSelectStart={() => console.log("Password alanına tıklandı")}
        >
          <Input
            name="password"
            type="password"
            position={[0, -0.6, 0]}
            width={5}
            height={0.5}
            onChange={handlePasswordChange}
          />
        </Interactive>
        <Interactive onSelectStart={handleSubmit}>
          <Submit value="Login" position={[0, -1, 0]} width={4} height={0.5} />
        </Interactive>
      </Form>
    </group>
  );
}

export default LoginBar;
