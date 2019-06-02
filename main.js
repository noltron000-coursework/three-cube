// DECLARE CONSTANT VALUES
const width = window.innerWidth
const height = window.innerHeight


// CREATE INITIAL THREE SCENE
const scene = new THREE.Scene


// CREATE CUBE
// set up geometry and texture/color
const cubeGeometry = new THREE.BoxGeometry(100, 100, 100)
const cubeMaterial = new THREE.MeshBasicMaterial({
	color: 0x1ec876
})
// generate cube geometry
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// rotate cube by 45 degrees, converted to radians
cube.rotation.y = Math.PI * 45 / 180
// finally, add it to our scene
scene.add(cube)


// CREATE CAMERA
// field of view determines how flat or deep an image is.
const camFOV = 45
// cameras are rectangular in THREE.
// they can be wide or tall, or exactly square.
// these properties are a rectangle's aspect ratio.
const camRatio = width / height
// the min distance at which an item will be rendered.
const camRenderMin = 0.1
// the max distance at which an item will be rendered.
const camRenderMax = 100000
// finally, we can put these declarations to good use.
const camera = new THREE.PerspectiveCamera(
	camFOV, camRatio, camRenderMin, camRenderMax
)
camera.position.y = 160
camera.position.z = 400
camera.lookAt(cube.position)
// add the new camera to the scene.
scene.add(camera)


// CREATE RENDERER CANVAS
// antialias smooths pixelated edges
const renderer = new THREE.WebGLRenderer({
	antialias: true 
})
// set size from earlier declaration
renderer.setSize(width, height)
// append the renderer canvas to the DOM
document.body.appendChild(renderer.domElement)
// finally, render the scene from the camera's perspective.
// without the camera, we would be blind.
// without the scene, the camera has nothing to look at.
renderer.render(scene, camera)
