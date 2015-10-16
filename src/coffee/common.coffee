global = this

###################################################
#初期化
###################################################
init = () ->
  # キャンパスの設定
  global.width = window.innerWidth
  global.height = window.innerHeight

  # レンダラーの生成
  global.renderer = new THREE.WebGLRenderer( {antialias: true} )
  global.renderer.setSize(global.width, global.height)

  # div要素を作ってHTMLのbody要素内に追加し、その中にレンダラがもつDOM要素を追加
  container = document.createElement('div')
  document.body.appendChild(container)

  global.renderer.setClearColor(0x000000, 1.0)
  container.appendChild(global.renderer.domElement)

  # シーン設定
  global.scene = new THREE.Scene()

  # カメラ設定
  initCamera()

  # ライト設定
  initLight()

  # オブジェクト設定
  initObject()

  # レンダリング
  render()

###################################################
# カメラ設定
###################################################

initCamera = () ->
  global.camera = new THREE.PerspectiveCamera( 20, global.width/ global.height, 1, 10000 )
  global.camera.position.set( 0, 0, 5)
  # global.camera.lookAt( {x: -150, y: -50, z: 0} ) # OrbitControls使用中は使えない
  global.controls = new THREE.OrbitControls(global.camera)
  # global.scene.add(global.camera)
  # global.trackBall = new  THREE.TrackballControls(global.camera)

###################################################
# ライト設定
###################################################

initLight = () ->
  light = new THREE.DirectionalLight(0xFF0000, 1.0, 0)
  light.position.set( 100, 100, 200 )
  global.scene.add(light)

###################################################
# オブジェクト設定
###################################################

initObject = () ->
  axis = new THREE.AxisHelper( 500 )
  global.scene.add(axis)

  # ジオメトリの生成 ( 半径150 経度分割数と緯度分割数が23に球体ジオメトリ)
  geometry = new THREE.SphereGeometry( 50, 32, 32 )

  # マテリアル hexコードff00ffの色 ワイヤーフレームを有効のマテリアル
  material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } )

  # メッシュの生成
  mesh = new THREE.Mesh( geometry, material )
  mesh.position.set(0, 0, -750)

  # 描画
  global.scene.add( mesh )

  # ジオメトリの生成 ( 半径150 経度分割数と緯度分割数が23に球体ジオメトリ)
  geometry2 = new THREE.SphereGeometry( 20, 12, 12 )

  # マテリアル hexコードff00ffの色 ワイヤーフレームを有効のマテリアル
  material2 = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } )

  # メッシュの生成
  mesh2 = new THREE.Mesh( geometry2, material2 )
  mesh2.position.set(50, 50, -450)

  # 描画
  global.scene.add( mesh2 )


  # plane = new THREE.Mesh(
  #   new THREE.PlaneGeometry( 500, 500, 10, 10),
  #   new THREE.MeshBasicMaterial( {color: 0xcccccc, wireframe: true} )
  # )
  # plane.position.set(0,0,0)
  # plane.rotation.x = Math.PI/2
  # global.scene.add(plane)

  # # cube
  # cube = new THREE.Mesh(
  #   new THREE.CubeGeometry(50,50,50),
  #   new THREE.MeshLambertMaterial({color: 0xFF0000})
  # )
  # cube.position.set(0,0,0)
  # global.scene.add(cube)

###################################################
# レンダリング
###################################################
render = () ->
  # global.renderer.clear()
  requestAnimationFrame(render)
  global.controls.update()
  global.renderer.clear()
  global.renderer.render(global.scene, global.camera)

do() ->
  window.addEventListener('load', init, false)
