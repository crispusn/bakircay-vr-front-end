import { useTexture } from "@react-three/drei";
import FakeGlowMaterial from "./FakeGlowMaterial";
import { Html } from "@react-three/drei";
import { Interactive, toggleSession } from "@react-three/xr";
import { Button, Card } from "@react-three/uikit-apfel";

import { Fullscreen, Container, Text, Root } from "@react-three/uikit";
// import Tabs from "./apfel/tabs";
import TabsX from "../components/Tabs";

function SidePlatesVr() {
  const texture = useTexture("/gradient.png");
  const logo = useTexture("/bakircay2.png");

  return (
    <>
      <group>
        <mesh position={[4.5, 3, 0]} scale={[0.1, 8, 14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
          <FakeGlowMaterial glowColor="#00A5B5" glowSharpness={3.0} />
        </mesh>
      </group>

      <group>
        <mesh position={[-4.5, 3, 0]} scale={[0.1, 8, 14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
          <FakeGlowMaterial glowColor="#00A5B5" glowSharpness={3.0} />
        </mesh>
      </group>

      <group>
        <mesh position={[0, 2, -5]} scale={[16, 8, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <Interactive>
          {/* <Html
            position={[0, 0, 0]} // Yeni pozisyon
            width={6} // Genişlik ayarı
            height={0.2}
            rotation={[0, Math.PI, 0]}
            fontSize={20}
            color="red"
          >
            <button className="btn">Giriş Yap</button>
          </Html> */}
          <Root flexDirection="row" padding={100} gap={100}>
            {/* <Container
                flexGrow={1}
                backgroundOpacity={0.5}
                hover={{ backgroundOpacity: 1 }}
                backgroundColor="red"
              />
              <Container
                flexGrow={1}
                backgroundOpacity={0.5}
                hover={{ backgroundOpacity: 1 }}
                backgroundColor="blue"
              /> */}
            <Root backgroundColor="red" sizeX={2} sizeY={1} flexDirection="row">
              <Container flexGrow={1} margin={48} backgroundColor="green" />
              <Container flexGrow={1} margin={48} backgroundColor="blue" />
            </Root>
          </Root>
        </Interactive>
      </group>
    </>
  );
}

export default SidePlatesVr;
