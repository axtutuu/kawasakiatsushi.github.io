(function() {
  var global, init, initCamera, initLight, initObject, render;

  global = this;

  init = function() {
    var container;
    global.width = window.innerWidth;
    global.height = window.innerHeight;
    global.renderer = new THREE.WebGLRenderer({
      antialias: true
    });
    global.renderer.setSize(global.width, global.height);
    container = document.createElement('div');
    document.body.appendChild(container);
    global.renderer.setClearColor(0x000000, 1.0);
    container.appendChild(global.renderer.domElement);
    global.scene = new THREE.Scene();
    initCamera();
    initLight();
    initObject();
    return render();
  };

  initCamera = function() {
    global.camera = new THREE.PerspectiveCamera(20, global.width / global.height, 1, 10000);
    global.camera.position.set(0, 0, 5);
    return global.controls = new THREE.OrbitControls(global.camera);
  };

  initLight = function() {
    var light;
    light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);
    light.position.set(100, 100, 200);
    return global.scene.add(light);
  };

  initObject = function() {
    var axis, geometry, geometry2, material, material2, mesh, mesh2;
    axis = new THREE.AxisHelper(500);
    global.scene.add(axis);
    geometry = new THREE.SphereGeometry(50, 32, 32);
    material = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true
    });
    mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -750);
    global.scene.add(mesh);
    geometry2 = new THREE.SphereGeometry(20, 12, 12);
    material2 = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true
    });
    mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(50, 50, -450);
    return global.scene.add(mesh2);
  };

  render = function() {
    requestAnimationFrame(render);
    global.controls.update();
    global.renderer.clear();
    return global.renderer.render(global.scene, global.camera);
  };

  (function() {
    return window.addEventListener('load', init, false);
  })();

}).call(this);
