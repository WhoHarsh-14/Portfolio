"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { useTheme } from "next-themes"

export function ThreeDCube() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)

    // Create cubes
    const cubes: THREE.Mesh[] = []
    const cubeSize = 0.5
    const cubeGap = 1.5
    const gridSize = 5

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          // Only create cubes at the edges of the grid
          if (x === 0 || x === gridSize - 1 || y === 0 || y === gridSize - 1 || z === 0 || z === gridSize - 1) {
            const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
            const material = new THREE.MeshBasicMaterial({
              color: 0x8b5cf6, // Purple color
              transparent: true,
              opacity: 0.7,
              wireframe: true,
            })

            const cube = new THREE.Mesh(geometry, material)

            // Position the cube in the grid
            cube.position.x = (x - gridSize / 2) * cubeGap
            cube.position.y = (y - gridSize / 2) * cubeGap
            cube.position.z = (z - gridSize / 2) * cubeGap

            scene.add(cube)
            cubes.push(cube)
          }
        }
      }
    }

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Position camera
    camera.position.z = 15

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate the entire scene
      scene.rotation.x += 0.001
      scene.rotation.y += 0.002

      // Pulse effect for cubes
      cubes.forEach((cube, i) => {
        const time = Date.now() * 0.001
        const scale = 1 + 0.1 * Math.sin(time + i * 0.1)
        cube.scale.set(scale, scale, scale)
      })

      renderer.render(scene, camera)
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose resources
      cubes.forEach((cube) => {
        cube.geometry.dispose()
        ;(cube.material as THREE.Material).dispose()
      })
    }
  }, [theme])

  return <div ref={containerRef} className="absolute inset-0" />
}

