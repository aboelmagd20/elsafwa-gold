// El Safwa hero: real-time 3D gold ring. Degrades silently to the photo hero.
import * as THREE from 'three';
import { RoomEnvironment } from './RoomEnvironment.js';

(function () {
  const canvas = document.getElementById('hero3d');
  if (!canvas) return;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  } catch (e) {
    canvas.remove();
    return;
  }

  const hero = canvas.parentElement;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0.4, 9.6);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const gold = new THREE.MeshStandardMaterial({
    color: 0xd8ab3e,
    metalness: 1.0,
    roughness: 0.16,
    envMapIntensity: 1.35,
  });

  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.55, 0.28, 96, 220), gold);

  const gemMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff, metalness: 0, roughness: 0.02,
    transmission: 0.9, thickness: 0.6, envMapIntensity: 2.2,
  });
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.26, 0), gemMat);
  gem.position.set(0, 1.98, 0);
  const gemSeat = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.07, 32, 80), gold);
  gemSeat.position.set(0, 1.82, 0);

  const group = new THREE.Group();
  group.add(ring, gem, gemSeat);
  group.rotation.x = 0.5;
  group.position.y = 0.55;
  scene.add(group);

  let baseY = 0.55;
  function layout() {
    const w = canvas.clientWidth || window.innerWidth;
    if (w < 768) { group.scale.setScalar(0.6); baseY = 1.3; }
    else { group.scale.setScalar(1); baseY = 0.55; }
  }
  layout();

  const key = new THREE.DirectionalLight(0xfff2cf, 2.2);
  key.position.set(4, 6, 6);
  scene.add(key);
  scene.add(new THREE.AmbientLight(0xfff6dd, 0.35));

  let targetRX = 0, targetRY = 0;
  window.addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    targetRY = nx * 0.35;
    targetRX = ny * 0.2;
  }, { passive: true });

  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(w, h, false);
    layout();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let visible = true;
  let raf = null;
  const clock = new THREE.Clock();

  function frame() {
    raf = null;
    const t = clock.getElapsedTime();
    group.rotation.y += 0.0035;
    group.rotation.x += ((0.5 + targetRX) - group.rotation.x) * 0.04;
    group.position.y = baseY + Math.sin(t * 0.8) * 0.1;
    group.rotation.z += (targetRY - group.rotation.z) * 0.04;
    gem.rotation.y += 0.012;
    renderer.render(scene, camera);
    if (visible && !document.hidden) raf = requestAnimationFrame(frame);
  }

  function setVisible(v) {
    visible = v;
    if (v && raf === null && !reduced) raf = requestAnimationFrame(frame);
  }

  new IntersectionObserver((entries) => setVisible(entries[0].isIntersecting), { threshold: 0.02 }).observe(hero);
  document.addEventListener('visibilitychange', () => setVisible(!document.hidden));

  renderer.render(scene, camera); // one static frame even before motion
  if (!reduced) raf = requestAnimationFrame(frame);
})();
