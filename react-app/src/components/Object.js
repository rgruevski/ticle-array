import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from '@react-three/drei';
import { useRef } from "react";
export const Object = ({ count, intensity, position, objectPosition, bufferGeometry, color }) => {
    const meshRef = useRef();
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.02
        }
    })
    return(
        <>
            <ambientLight intensity={intensity} />
            <pointLight position={position} />
            <Sphere ref={meshRef} position={objectPosition}>
                <meshStandardMaterial color={color} />
            </Sphere>
            <mesh>
                <sphereBufferGeometry args={bufferGeometry} />
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    );
}