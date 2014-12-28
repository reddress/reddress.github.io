(function(three) {
  var scene = new three.Scene();
  var camera = new three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  var renderer = null;
  renderer = new three.WebGLRenderer();
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  var geometry = new three.BoxGeometry(1, 1, 1);
  var material = new three.MeshBasicMaterial({ color: "#00ffff" });
  var cube = new three.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
  }

  render();
})(THREE);
