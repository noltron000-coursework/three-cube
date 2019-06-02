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


// CREATE CUBE
// set up geometry and texture/color
const cubeGeometry = new THREE.CubeGeometry(100, 100, 100)
const cubeMaterial = new THREE.MeshLambertMaterial({
	color: 0x1ec876
})
// generate cube geometry
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// rotate cube by 45 degrees, converted to radians
cube.rotation.y = Math.PI * 45 / 180
// finally, add it to our scene
scene.add(cube)
