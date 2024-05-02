import { useTexture } from "@react-three/drei";
import FakeGlowMaterial from "./FakeGlowMaterial";

function SidePlates() {
  const texture = useTexture("/gradient.png");
  const logo = useTexture("/bakircay2.png");

  return (
    <>
      <group>
        <mesh position={[4.5, 2, 0]} scale={[0.1, 8, 14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
          <FakeGlowMaterial glowColor="#00A5B5" glowSharpness={3.0} />
        </mesh>
      </group>

      <group>
        <mesh position={[-4.5, 2, 0]} scale={[0.1, 8, 14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
          <FakeGlowMaterial glowColor="#00A5B5" glowSharpness={3.0} />
        </mesh>
      </group>

      <group>
        <mesh position={[0, 1, 0]} scale={[12, 8, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh position={[0, 2, 0]} scale={[3, 2, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={logo} />
        </mesh>
      </group>
    </>
  );
}

export default SidePlates;
