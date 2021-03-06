import {
  Scene,
  Engine,
  Vector3,
  CubeTexture,
  SceneLoader,
  ArcRotateCamera,
  Color4,
} from '@babylonjs/core';
import '@babylonjs/loaders';

export class ArtChair {
  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    //this.CreateGround();
    //this.CreateBarrel();
    this.CreateChair();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    scene.clearColor = new Color4(0, 0, 0, 0.0000000000000001);
    const camera = new ArcRotateCamera(
      'camera',
      0.7,
      1.2,
      5,
      new Vector3(0, 1, 0),
      this.scene
    );
    camera.attachControl(this.canvas);
    camera.useBouncingBehavior = true;
    camera.wheelPrecision = 100;
    camera.lowerRadiusLimit = 1;
    camera.upperRadiusLimit = 8;
    camera.speed = 0.25;

    const envTex = CubeTexture.CreateFromPrefilteredData(
      './environment/sky.env',
      scene
    );

    scene.environmentTexture = envTex;

    scene.environmentIntensity = 0.5;

    return scene;
  }

  async CreateChair(): Promise<void> {
    const models = await SceneLoader.ImportMeshAsync(
      '',
      './models/',
      'Panton_Chair.gltf'
    );

    models.meshes[0].position = new Vector3(0, 0, 0);
  }
}
