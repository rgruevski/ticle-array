import React, { useState } from 'react';
import { Object } from './Object';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Scene() {

    const [color, setColor] = useState("#FFFFF");
    const [count, setCount] = useState(1);
    const [ambientLightIntensity, setAmbientLightIntensity] = useState(0.5);
    const [objectPosition, setObjectPosition] = useState([10, 10, 10]);
    const [pointLightPosition, setPointLightPosition] = useState([10, 10, 10]);
    const [bufferGeometry, setBufferGeometry] = useState([1, 1, 1]);

    const handleColorChange = (event) => {
        const { value } = event.target;
        setColor(value);
    };
    const handleCountChange = (event) => {
        const { value } = event.target;
        setCount(value);
    }
    const handleAmbientLightIntensityChange = (event) => {
        const { value } = event.target;
        setAmbientLightIntensity(parseFloat(value));
    };
    const handleObjectPositionChange = (event) => {
        const { value } = event.target;
        setObjectPosition(value);
    }
    const handleBufferGeometryChange = (event) => {
        const { name, value } = event.target;
        setBufferGeometry((prevGeometry) => {
            const updatedGeometry = [...prevGeometry];
            updatedGeometry[name] = parseFloat(value);
            return updatedGeometry;
        });
    };
    const handlePointLightPositionChange = (event) => {
        const { name, value } = event.target;
        setPointLightPosition((prevPosition) => {
            const updatedPosition = [...prevPosition];
            updatedPosition[name] = parseFloat(value);
            return updatedPosition;
        });

    };
    return (
        <>
            <div>           
                <Canvas className="object-frame">
                <OrbitControls />
                <Object
                    orbCount={count}
                    intensity={ambientLightIntensity}
                    objectPosition={objectPosition}
                    position={pointLightPosition}
                    bufferGeometry={bufferGeometry}
                    color={color} />
                </Canvas>
            </div>
            <form>
                {/* <div className="card">
                    <input
                        type="range"
                        min="1"
                        max="10"
                        step="0.1"
                        onChange={handleCountChange}
                    />
                </div> */}
                <div className="card">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={ambientLightIntensity}
                        onChange={handleAmbientLightIntensityChange}
                    />
                </div>
                <div className="card">
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
                <div className="card">
                    <input
                        type="number"
                        name="0"
                        value={objectPosition[0]}
                        onChange={handleObjectPositionChange}
                    />
                    <input
                        type="number"
                        name="1"
                        value={objectPosition[1]}
                        onChange={handleObjectPositionChange}
                    />
                    <input
                        type="number"
                        name="2"
                        value={objectPosition[2]}
                        onChange={handleObjectPositionChange}
                    />
                </div>
                <div className="card">
                    <input
                        type="number"
                        name="0"
                        value={pointLightPosition[0]}
                        onChange={handlePointLightPositionChange}
                    />
                    <input
                        type="number"
                        name="1"
                        value={pointLightPosition[1]}
                        onChange={handlePointLightPositionChange}
                    />
                    <input
                        type="number"
                        name="2"
                        value={pointLightPosition[2]}
                        onChange={handlePointLightPositionChange}
                    />
                </div>
                <div className="card">
                    <input
                        type="number"
                        name="0"
                        value={bufferGeometry[0]}
                        onChange={handleBufferGeometryChange}
                    />
                    <input
                        type="number"
                        name="1"
                        value={bufferGeometry[1]}
                        onChange={handleBufferGeometryChange}
                    />
                    <input
                        type="number"
                        name="2"
                        value={bufferGeometry[2]}
                        onChange={handleBufferGeometryChange}
                    />
                </div>
            </form>
        </>
    );
}

export default Scene;