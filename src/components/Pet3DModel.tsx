
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ModelProps {
  scale: [number, number, number];
  position: [number, number, number];
  rotation: [number, number, number];
}

function CatModel({ scale, position, rotation }: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  
  // Simple animation for the cat model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });

  // This would normally load a GLTF model
  // Since we don't have actual models, we'll create a simple cat shape
  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh castShadow receiveShadow>
        {/* Cat body */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color={new THREE.Color("#f5c542")} roughness={0.7} metalness={0.1} />
      </mesh>
      <group position={[0, 1, 0]}>
        {/* Cat head */}
        <mesh castShadow>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color("#f5c542")} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Cat ears */}
        <mesh position={[0.4, 0.4, 0]} rotation={[0, 0, Math.PI / 4]}>
          <coneGeometry args={[0.3, 0.6, 32]} />
          <meshStandardMaterial color={new THREE.Color("#f5c542")} roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[-0.4, 0.4, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <coneGeometry args={[0.3, 0.6, 32]} />
          <meshStandardMaterial color={new THREE.Color("#f5c542")} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Cat eyes */}
        <mesh position={[0.25, 0, 0.6]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color("black")} />
        </mesh>
        <mesh position={[-0.25, 0, 0.6]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color("black")} />
        </mesh>
      </group>
    </group>
  );
}

function DogModel({ scale, position, rotation }: ModelProps) {
  const group = useRef<THREE.Group>(null!);
  
  // Simple animation for the dog model
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 2) * 0.5;
  });

  // Simple dog shape
  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh castShadow receiveShadow>
        {/* Dog body */}
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial color={new THREE.Color("#8B4513")} roughness={0.7} metalness={0.1} />
      </mesh>
      <group position={[0, 1.2, 0]}>
        {/* Dog head */}
        <mesh castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color("#8B4513")} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Dog ears */}
        <mesh position={[0.5, 0.5, 0]} rotation={[0, 0, Math.PI / 8]}>
          <boxGeometry args={[0.3, 0.6, 0.1]} />
          <meshStandardMaterial color={new THREE.Color("#8B4513")} roughness={0.7} metalness={0.1} />
        </mesh>
        <mesh position={[-0.5, 0.5, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <boxGeometry args={[0.3, 0.6, 0.1]} />
          <meshStandardMaterial color={new THREE.Color("#8B4513")} roughness={0.7} metalness={0.1} />
        </mesh>
        {/* Dog eyes */}
        <mesh position={[0.3, 0, 0.7]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color("black")} />
        </mesh>
        <mesh position={[-0.3, 0, 0.7]}>
          <sphereGeometry args={[0.1, 32, 32]} />
          <meshStandardMaterial color={new THREE.Color("black")} />
        </mesh>
        {/* Dog snout */}
        <mesh position={[0, -0.1, 0.9]}>
          <boxGeometry args={[0.5, 0.4, 0.5]} />
          <meshStandardMaterial color={new THREE.Color("#8B4513")} roughness={0.7} metalness={0.1} />
        </mesh>
      </group>
    </group>
  );
}

interface Pet3DModelProps {
  pet?: "cat" | "dog";
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  autoRotate?: boolean;
}

const Pet3DModel = ({
  pet = "cat",
  scale = 1,
  position = [0, -1, 0],
  rotation = [0, 0, 0],
  autoRotate = true
}: Pet3DModelProps) => {
  // Create a properly typed scale array with the same value for x, y, and z
  const scaleArray: [number, number, number] = [scale, scale, scale];
  
  return (
    <div className="w-full h-full">
      <Canvas 
        dpr={[1, 2]} 
        shadows 
        camera={{ position: [0, 2, 5], fov: 50 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
        <pointLight position={[-10, -10, -10]} />
        
        {pet === "cat" ? (
          <CatModel 
            scale={scaleArray}
            position={position} 
            rotation={rotation} 
          />
        ) : (
          <DogModel 
            scale={scaleArray}
            position={position} 
            rotation={rotation} 
          />
        )}
        
        <Environment preset="apartment" />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Pet3DModel;
