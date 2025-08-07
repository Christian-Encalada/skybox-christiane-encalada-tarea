# Skybox Next: Entorno 3D Inmersivo con Modelos Animados

## Descripción
Este proyecto es una escena 3D inmersiva desarrollada con Next.js y Three.js, donde se exploran entornos tridimensionales usando skyboxes personalizados y modelos 3D animados. Permite visualizar varios personajes animados en un entorno realista, con controles de cámara e iluminación interactivos.

## Objetivo de aprendizaje
- Aplicar conocimientos sobre entornos tridimensionales usando skyboxes y animaciones de modelos 3D.
- Modularizar el código para mantenerlo limpio, reutilizable y profesional.

## Tecnologías utilizadas
- **Next.js** (React)
- **Three.js** (a través de @react-three/fiber y @react-three/drei)
- **GLTF/GLB** para modelos 3D animados
- **HDRI** para fondos realistas

## Estructura del proyecto
```
components/
  ├── ThreeScene.tsx        // Orquesta la escena principal
  ├── ModelViewer.tsx       // Carga y anima modelos 3D
  ├── CustomSkybox.tsx      // Aplica un fondo HDRI personalizado
  └── SceneControls.tsx     // Controles de animación e iluminación
public/
  ├── model/                // Modelos 3D animados (GLB)
  └── hdri/                 // Imágenes HDRI para el skybox
app/
  └── page.tsx              // Página principal que monta la escena
```

## Instrucciones de uso
1. **Instala dependencias:**
   ```bash
   npm install
   ```
2. **Ejecuta el proyecto en desarrollo:**
   ```bash
   npm run dev
   ```
3. **Abre en tu navegador:**
   [http://localhost:3000](http://localhost:3000)

## Controles de la escena
- **Movimiento:** Pausar/Reanudar animación de los modelos.
- **Iluminación:** Cambia entre 3 tipos de iluminación con los botones 1, 2 y 3.
- **Cámara:** Usa el mouse para rotar, hacer zoom y mover la vista.

## Recursos utilizados
- **Modelos 3D:**
  - Male Survivor 1, Male Survivor 2, Female Survivor 1, Female Survivor 2 (GLB)
- **HDRI:**
  - Oberer Kuhberg 2k (descargado de [Poly Haven](https://polyhaven.com/a/oberer_kuhberg))

## Créditos
- Modelos y HDRI bajo licencia CC0 (dominio público).
- Proyecto realizado por Christian Encalada como práctica de entornos 3D en React/Three.js.

