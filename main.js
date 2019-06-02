// DECLARE CONSTANT VALUES
const width = window.innerWidth
const height = window.innerHeight

// CREATE RENDERER CANVAS
// antialias smooths pixelated edges
const renderer = new THREE.WebGLRenderer({
	antialias: true 
})
// set size from earlier declaration
renderer.setSize(width, height)
// append the renderer canvas to the DOM
document.body.appendChild(renderer.domElement)

// CREATE SCENE
const scene = new THREE.Scene
