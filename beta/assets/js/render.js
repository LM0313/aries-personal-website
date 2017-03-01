function time(date, second) {
    var date = new Date();　
    var second = date.getSeconds();　
    setTimeout('time()', 1000);
    return second;
}
console.log(time());
var windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    camera, scene, renderer;
init();
animate();

function init() {
    /*
     *   Define variables
     */
    var container, separation = 1000,
        amountX = 50,
        amountY = 50,
        color = '#' + Math.floor(Math.random() * 16777215).toString(16),
    particles, particle;
    console.log(color);
    container = document.getElementById("canvas");
    camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 700;
    scene = new THREE.Scene();
    renderer = new THREE.CanvasRenderer({
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 1); // canvas background color
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    var PI2 = Math.PI * 2;
    var material = new THREE.SpriteCanvasMaterial({
        color: color,
        opacity: 0.7,
        program: function(context) {
            context.beginPath();
            context.arc(0, 0, 1, 0, PI2, true);
            context.fill();
        }
    });
    var geometry = new THREE.Geometry();
    /*
     *   Number of particles
     */
    for (var i = 0; i < 300; i++) {
        particle = new THREE.Sprite(material);
        particle.position.x = Math.random() * 2 - 1;
        particle.position.y = Math.random() * 2 - 1;
        particle.position.z = Math.random() - 1;
        particle.position.normalize();
        particle.position.multiplyScalar(Math.random() * 2 + 2500);
        particle.scale.x = particle.scale.y = 20;
        scene.add(particle);
        geometry.vertices.push(particle.position);
    }
    particle.position.x += time() * 1000;
    particle.position.y += time() * 1000;
    /*
     *   Lines
     */
    var line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: color,
        opacity: 0
    }));
    scene.add(line);
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    // camera.position.x += (mouseX - camera.position.x) * 0.1;
    // camera.position.y += (-mouseY + 200 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
}
