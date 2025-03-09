export enum ItemType {
  Ore,
  RefinedOre,
  Components,
}

export interface Recipe {
  type: ItemType;
  key: string;
  quantity: number;
}

export interface Ore {
  type: ItemType;
  key: OreKey;
  name: string;
  value: number;
}

export interface RefinedOre {
  type: ItemType;
  key: RefinedOreKey;
  name: string;
  value: number;
  time: number;
  recipe: Recipe[];
}

export interface Components {
  type: ItemType;
  key: ComponentKey;
  name: string;
  value: number;
  time: number;
  recipe: Recipe[];
}

export enum OreKey {
  Carbon = "carbon",
  Tin = "tin",
  Cobalt = "cobalt",
  Bismuth = "bismuth",
  Cerussite = "cerussite",
  Manganese = "manganese",
  Einherjer = "einherjer",
  DarkMatter = "dark-matter",
  Kriptonite = "kriptonite",
  Coreium = "coreium",
  Cerythium = "cerythium",
  Etherium = "etherium",
  Cosmium = "cosmium",
  Galaxium = "galaxium",
  Mythril = "mythril",
  Xenon = "xenon",
  Wrayth = "wrayth",
  Aurorium = "aurorium",
  Tungsten = "tungsten",
  Zyther = "zyther",
}

export enum RefinedOreKey {
  RefinedCarbon = "refined-carbon",
  RefinedTin = "refined-tin",
  RefinedCobalt = "refined-cobalt",
  RefinedBismuth = "refined-bismuth",
  RefinedCerussite = "refined-cerussite",
  RefinedManganese = "refined-manganese",
  RefinedEinherjer = "refined-einherjer",
  ManganeseAlloy = "manganese-alloy",
  CobaltAlloy = "cobalt-alloy",
  KriptoniteAlloy = "kriptonite-alloy",
  CoreiumAlloy = "coreium-alloy",
  CerythiumAlloy = "cerythium-alloy",
  EtheriumAlloy = "etherium-alloy",
  CosmiumAlloy = "cosmium-alloy",
  GalaxiumAlloy = "galaxium-alloy",
  MythrilAlloy = "mythril-alloy",
  XenonAlloy = "xenon-alloy",
  WraythAlloy = "wrayth-alloy",
  AuroriumAlloy = "aurorium-alloy",
  TungstenAlloy = "tungsten-alloy",
  ZytherAlloy = "zyther-alloy",
}

export enum ComponentKey {
  Cables = "cables",
  Fuse = "fuse",
  HeatSensor = "heat-sensor",
  BallBearing = "ball-bearing",
  Glass = "glass",
  Circuit = "circuit",
  Lense = "lense",
  LaserOptic = "laser-optic",
  MiniRover = "mini-rover",
  SolarPanel = "solar-panel",
  LaserBlaster = "laser-blaster",
  AdvancedSensors = "advanced-sensors",
  SurfaceScanner = "surface-scanner",
  PlanetExplorer = "planet-explorer",
  PlanetDustCollector = "planet-dust-collector",
  PlasmaCannon = "plasma-cannon",
  IonRocketEngine = "ion-rocket-engine",
  MobileTelescope = "mobile-telescope",
  AdvancedAntenna = "advanced-antenna",
  XenonEngine = "xenon-engine",
  PlanetRadar = "planet-radar",
  InfraredHomingTurret = "infrared-homing-turret",
  GravityReactor = "gravity-reactor",
  ExospaceProbe = "exospace-probe",
  SpaceProtectorX1000 = "space-protector-x1000",
  SupercombustionFuel = "supercombustion-fuel",
  SpaceFleetStation = "space-fleet-station",
  SuperWraythLense = "super-wrayth-lense",
  HyperspeedThrusters = "hyperspeed-thrusters",
  AuroraAlternator = "aurora-alternator",
  SpaceElevator = "space-elevator",
  SpaceParticleEngine = "space-particle-engine",
  GalacticPortal = "galactic-portal",
  TimeTravelingMachine = "time-traveling-machine",
  DysonSphere = "dyson-sphere",
  BlackHoleGenerator = "black-hole-generator",
}
