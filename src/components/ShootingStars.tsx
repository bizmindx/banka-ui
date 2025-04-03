import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Star {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  mesh: THREE.Mesh;
}

const ShootingStars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
    
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Create stars
    const createStar = (): Star => {
      const geometry = new THREE.SphereGeometry(0.02, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: Math.random() * 0.5 + 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);

      // Random starting position
      const position = new THREE.Vector3(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        0
      );
      
      // Random velocity
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        0
      );

      mesh.position.copy(position);
      scene.add(mesh);

      return {
        position,
        velocity,
        mesh,
      };
    };

    // Initialize stars
    for (let i = 0; i < 50; i++) {
      starsRef.current.push(createStar());
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      starsRef.current.forEach((star) => {
        star.position.add(star.velocity);
        star.mesh.position.copy(star.position);

        // Reset star if it goes out of bounds
        if (
          Math.abs(star.position.x) > 5 ||
          Math.abs(star.position.y) > 5
        ) {
          star.position.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            0
          );
          star.mesh.position.copy(star.position);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      starsRef.current.forEach((star) => {
        scene.remove(star.mesh);
      });
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />;
};

export default ShootingStars;