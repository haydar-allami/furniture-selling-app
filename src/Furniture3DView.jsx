import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

function Chair() {
  return (
    <group>
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[1.5, 0.3, 1.5]} />
        <meshStandardMaterial color="#8d5524" />
      </mesh>
      <mesh position={[0, 0.8, -0.65]}>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <meshStandardMaterial color="#8d5524" />
      </mesh>
    </group>
  )
}

function Table() {
  return (
    <group>
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[2, 0.2, 1]} />
        <meshStandardMaterial color="#c68642" />
      </mesh>
      {[-0.85, 0.85].map(x => [
        [-0.4, 0.4].map(z => (
          <mesh key={`${x}-${z}`} position={[x, 0.3, z]}>
            <cylinderGeometry args={[0.07, 0.07, 0.6, 16]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
        )),
      ])}
    </group>
  )
}

const Furniture3DView = ({ model }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas camera={{ position: [2, 2, 4], fov: 45 }}>
        <Stage environment="city" intensity={0.6}>
          <group rotation-y={performance.now() * 0.001}>
            {model === 'chair' ? <Chair /> : <Table />}
          </group>
        </Stage>
        <OrbitControls enablePan={false} minDistance={2} maxDistance={10} />
      </Canvas>
    </div>
  )
}

export default Furniture3DView;
