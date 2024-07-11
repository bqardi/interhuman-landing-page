(function () {
  const container = document.querySelector("[data-canvas-container]");

  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  setDimensions(container);
  container.appendChild(renderer.domElement);

  const circles = [];
  const circleCount = 500;
  const circleRadius = 0.24;
  for (let i = 0; i < circleCount; i++) {
    const circleGeometry = new THREE.CircleGeometry(circleRadius, 32);
    const material = new THREE.MeshBasicMaterial({
      color: getPastelColor(),
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(circleGeometry, material);
    mesh.position.x = (Math.random() - 0.5) * 50;
    mesh.position.y = (Math.random() - 0.5) * 50;
    mesh.position.z = (Math.random() - 0.5) * 50;
    mesh.initialY = mesh.position.y;
    scene.add(mesh);
    circles.push(mesh);
  }

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.enableZoom = false;

  function render() {
    requestAnimationFrame(render);
    const time = Date.now() * 0.001;
    circles.forEach((circle) => {
      circle.position.y =
        circle.initialY + Math.sin(time + circle.position.x) * 0.1;
    });

    controls.update();
    renderer.render(scene, camera);
  }
  render();

  function getPastelColor() {
    const r = Math.random() * 0.5 + 0.5;
    const g = Math.random() * 0.5 + 0.5;
    const b = Math.random() * 0.5 + 0.5;
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
      b * 255
    )})`;
  }

  window.addEventListener("resize", () => setDimensions(container));
  container.addEventListener("click", () => document.activeElement.blur());

  function setDimensions(container) {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    return { width, height };
  }
})();
