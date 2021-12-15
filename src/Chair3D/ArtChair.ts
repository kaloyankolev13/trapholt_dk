import {
  Scene,
  Engine,
  Vector3,
  MeshBuilder,
  CubeTexture,
  Texture,
  PBRMaterial,
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

    // scene.createDefaultSkybox(envTex, true);

    scene.environmentIntensity = 0.5;

    return scene;
  }

  CreateGround(): void {
    const ground = MeshBuilder.CreateGround(
      'ground',
      { width: 10, height: 10 },
      this.scene
    );

    ground.material = this.CreateAsphalt();
  }

  CreateAsphalt(): PBRMaterial {
    const pbr = new PBRMaterial('pbr', this.scene);
    pbr.albedoTexture = new Texture(
      './textures/asphalt/asphalt_diffuse.jpg',
      this.scene
    );

    pbr.bumpTexture = new Texture(
      './textures/asphalt/asphalt_normal.jpg',
      this.scene
    );

    pbr.invertNormalMapX = true;
    pbr.invertNormalMapY = true;

    pbr.useAmbientOcclusionFromMetallicTextureRed = true;
    pbr.useRoughnessFromMetallicTextureGreen = true;
    pbr.useMetallnessFromMetallicTextureBlue = true;

    pbr.metallicTexture = new Texture(
      './textures/asphalt/asphalt_ao_rough_metal.jpg',
      this.scene
    );

    return pbr;
  }

  async CreateChair(): Promise<void> {
    const models = await SceneLoader.ImportMeshAsync(
      '',
      './models/',
      'Panton_Chair.gltf'
    );

    models.meshes[0].position = new Vector3(0, 0, 0);

    console.log('models', models);
  }
}
