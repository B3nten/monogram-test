import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps, useThree } from "@react-three/fiber";

export function Model(props: GroupProps) {
    const { viewport } = useThree();
    const group = useRef<GroupProps>({});
    useEffect(() => {
        const x = innerWidth / 2;
        const y = innerHeight / 2;
        function foo(e: MouseEvent) {
            const mouseX = (e.clientX - x) / x;
            const mouseY = (e.clientY - y) / x;
            if (typeof group.current?.rotation?.x === 'number' && typeof group.current?.rotation?.y === 'number') {
                group.current.rotation.x = (mouseY * .3) + 0;
                group.current.rotation.y = (mouseX * .2) - 1.6;
            }
        }
        document.addEventListener('mousemove', foo);
        return () => {
            removeEventListener('mousemove', foo);
        };
    }, [innerHeight, innerWidth]);

    const { nodes, materials }: any = useGLTF("/assets/models/Ball.glb");
    return (
        <group rotation={[0, -1.6, 0]} ref={group} {...props} dispose={null}>
            <group scale={(viewport.width / 2.53)}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_primitive1.geometry}
                    material={materials.Logos}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_primitive0.geometry}
                    material={materials.Ball}
                />
            </group>
        </group>
    );
}
useGLTF.preload("/assets/models/Ball.glb");