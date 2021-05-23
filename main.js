import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.128.0-SK0zhlI7UZNd0gIQdpJa/mode=imports,min/optimized/three.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });

// let ts = Array(200).fill({
//     let geometry = new THREE.TorusGeometry(10, 3, 16, 100)
//     return new THREE.Mesh(geometry, material);
// })
let ts = Array(2);
for (let i = 0; i < ts.length; i++) {
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347 });
    ts[i] = new THREE.Mesh(geometry, material);
    ts[i].position.x = THREE.MathUtils.randFloat(-10, 10);
    // ts[i].position.y = THREE.MathUtils.randFloat(-10, 10);
    scene.add(ts[i]);
};
// let ts = Array(100).fill(new THREE.Mesh(geometry, material));
// ts.forEach((t) => {
//     scene.add(t);
//     t.position.x = THREE.MathUtils.randFloat(-10, 10);
// });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus);
// scene.add(ts);

function animate() {
    requestAnimationFrame(animate);

    ts.forEach(torus => {
        // torus.rotation.x += THREE.MathUtils.randFloat(0, 0.001);
        torus.rotation.x += THREE.MathUtils.randFloat(0, 0.1);
        // torus.rotation.y += 0.005;
        // torus.rotation.z += 0.01;
    });

//   torus.position.z = 0.1;
//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

    renderer.render(scene, camera);
}

animate();