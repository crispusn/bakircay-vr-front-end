import { useTexture } from "@react-three/drei";

function SidePlates() {
  const texture = useTexture("/gradient.png");
  const logo = useTexture("/bakircay2.png");

  return (
    <>
      <mesh position={[9, 1, 0]} scale={[0.1, 8, 14]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh position={[-9, 1, 0]} scale={[0.1, 8, 14]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <mesh position={[0, 1, -7]} scale={[18, 8, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
}

export default SidePlates;
