(function(three) {
  var scene = new three.Scene();
  var camera = null;

   camera = new three.PerspectiveCamera(15, window.innerWidth / window.innerHeight, 0.1, 100);

//  camera = new three.OrthographicCamera(0.5 * window.innerWidth / -2, 0.5 * window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, 150, 1000);
  

  var controls = new three.TrackballControls(camera);

  var renderer = null;
  renderer = new three.CanvasRenderer();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new three.BoxGeometry(0.3, 0.3, 0.0001);
  var material = new three.MeshBasicMaterial({ color: "#00ffff", overdraw: 1 });
  var cube = new three.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 2;

  function render() {
    requestAnimationFrame(render);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
  }

  render();
})(THREE);
