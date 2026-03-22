import React, { Component, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, Environment, ContactShadows, Icosahedron, MeshDistortMaterial } from '@react-three/drei';

// Fallback 3D "Cyber Core" model in case of network failure
const CyberCore = () => {
  const coreRef = React.useRef();
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      coreRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
      <group ref={coreRef}>
        <Icosahedron args={[1.2, 0]} scale={1.2}>
          <meshStandardMaterial color="#b300ff" wireframe />
        </Icosahedron>
        <Icosahedron args={[0.8, 2]}>
          <MeshDistortMaterial 
            color="#ff6a00" 
            distort={0.4} 
            speed={3} 
            emissive="#ff6a00"
            emissiveIntensity={1}
          />
        </Icosahedron>
      </group>
    </Float>
  );
};

// Real GLTF Model loading
const GLTFModel = () => {
  const { scene } = useGLTF('/space_boi.glb');
  const groupRef = React.useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation tracking the mouse
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;
      
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <primitive 
          object={scene} 
          scale={1.8} 
          position={[0, -1.2, 0]} 
          rotation={[0.1, 0, 0]} 
        />
      </group>
    </Float>
  );
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // If the external model fails to load or CORS blocks it, show the procedural 3D model
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const Hero3D = () => {
  return (
    <div className="hero-3d-container" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ff6a00" />
        <directionalLight position={[-10, -10, -5]} intensity={2} color="#b300ff" />
        
        <ErrorBoundary fallback={<CyberCore />}>
          <Suspense fallback={<CyberCore />}>
            <GLTFModel />
            <Environment preset="city" />
            <ContactShadows position={[0, -1.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000" />
          </Suspense>
        </ErrorBoundary>
      </Canvas>
    </div>
  );
};

export default Hero3D;
