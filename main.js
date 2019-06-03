// DECLARE CONSTANT VALUES
const width = window.innerWidth
const height = window.innerHeight


// CREATE INITIAL THREE SCENE
const scene = new THREE.Scene


// CREATE CUBE
// set up geometry and texture/color
const cubeGeometry = new THREE.BoxGeometry(100, 100, 100)
// create a new texture
// WARNING: CORS must be enabled to do this with local hosting
// In chrome, we must set the flag --allow-file-access-from-files
const cubeTexture = new THREE.TextureLoader().load('./assets/box.png')
// lambert geometry means 'please render using lights!'
// here we also map cubetexture
const materials = []
materials.push(new THREE.MeshLambertMaterial({ 
	map: cubeTexture, color: 0xff0000 
})) // right face
materials.push(new THREE.MeshLambertMaterial({ 
	map: cubeTexture, color: 0xffff00 
})) // left face
materials.push(new THREE.MeshLambertMaterial({ 
	map: cubeTexture, color: 0xffffff 
})) // top face
materials.push(new THREE.MeshLambertMaterial({ 
	map: cubeTexture, color: 0x00ffff 
})) // bottom face
materials.push(new THREE.MeshLambertMaterial({ 
	map: cubeTexture, color: 0x00ffff 
})) // front face
materials.push(new THREE.MeshLambertMaterial({ 
	map: cubeTexture, color: 0xff00ff 
})) // back face
// great - now we can apply a texture to each of the six faces.
const cubeMaterial = new THREE.MeshFaceMaterial(materials)
// generate cube geometry
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// rotate cube by 45 degrees, converted to radians
cube.rotation.y = Math.PI * 45 / 180
// finally, add it to our scene
scene.add(cube)


// CREATE SKYBOX
// set up geometry and texture/color
const skyboxGeometry = new THREE.BoxGeometry(10000, 10000, 10000)
const skyboxMaterial = new THREE.MeshBasicMaterial({
	// we're inside the skybox.
	// BackSide renders the insides of a box...
	// ...usually it instead renders its outside surfaces.
	side: THREE.BackSide,
	color: 0x111111,
})
const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterial)
// add the new skybox to the scene.
scene.add(skybox)


// CREATE LIGHTS
// set up a point light with a color.
const pointLight = new THREE.PointLight(0xffffff)
const yellowLight = new THREE.PointLight(0xffff00)
// move the point light above and forward.
pointLight.position.set(-100, 100, 100)
yellowLight.position.set(2000, 400, 800)
// add the new light to the scene.
scene.add(pointLight)
scene.add(yellowLight)


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


// CREATE CLOCK TO REFERENCE WITH OUR ANIMATIONS
const clock = new THREE.Clock


// CREATE RENDERER CANVAS
// antialias smooths pixelated edges
const renderer = new THREE.WebGLRenderer({
	antialias: true 
})
// set size from earlier declaration
renderer.setSize(width, height)
// append the renderer canvas to the DOM
document.body.appendChild(renderer.domElement)
// declare render function
const render = () => {
	// finally, render the scene from the camera's perspective.
	// without the camera, we would be blind.
	// without the scene, the camera has nothing to look at.
	renderer.render(scene, camera)
	// change the cube's rotation.
	cube.rotation.y -= clock.getDelta()
	// now, we push the frame forward by one.
	// we're covered even if there are frame lags and skips.
	// this is because of our THREE clock.
	requestAnimationFrame(render)
}
// call the render loop - it renders every frame once.
render()
