import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.128.0-SK0zhlI7UZNd0gIQdpJa/mode=imports,min/optimized/three.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
camera.position.set(-10, 30, 50);


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
const gridHelper = new THREE.GridHelper(100, 10);
scene.add(gridHelper);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const spotLight = new THREE.PointLight(0xffffff, 1);
spotLight.position.set(50, 0, 50);
scene.add(spotLight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

let ts = Array(5);
for (let i = 0; i < ts.length; i++) {
    ts[i] = new THREE.Mesh(
        new THREE.TorusGeometry(10, 3, 16, 100),
        new THREE.MeshStandardMaterial({ color: 0xff6347 })
    );
    ts[i].position.x = THREE.MathUtils.randFloat(-25, 25);
    ts[i].position.y = THREE.MathUtils.randFloat(-25, 25);
    scene.add(ts[i]);
}

let y = 50;
const animate = () => {
    requestAnimationFrame(animate);

    if (y > 0) {
        camera.lookAt(0, y, 0);
        y -= 0.5;
    }

    ts.forEach(torus => {
        torus.rotation.x += THREE.MathUtils.randFloat(0, 0.1);
        torus.rotation.y += THREE.MathUtils.randFloat(0, 0.1);
        torus.rotation.z += THREE.MathUtils.randFloat(0, 0.1);
    });

    renderer.render(scene, camera);
};
animate();