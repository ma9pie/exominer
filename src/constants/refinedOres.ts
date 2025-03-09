import { ONE_MINUTES } from "@/constants";
import { ItemType, OreKey, RefinedOre, RefinedOreKey } from "@/types";

export const REFINED_ORE_LIST: RefinedOre[] = [
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedCarbon,
    name: "정제 탄소",
    value: 1450,
    time: 20,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Carbon,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedTin,
    name: "정제 주석",
    value: 3000,
    time: 30,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Tin,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedCobalt,
    name: "정제 코발트",
    value: 6100,
    time: 40,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Cobalt,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedBismuth,
    name: "정제 비스무트",
    value: 12500,
    time: ONE_MINUTES,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Bismuth,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedCerussite,
    name: "정제 백연광",
    value: 27600,
    time: ONE_MINUTES + 20,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Cerussite,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedManganese,
    name: "정제 망간",
    value: 60000,
    time: ONE_MINUTES * 2,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Manganese,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.RefinedEinherjer,
    name: "정제 에인헤랴르",
    value: 120000,
    time: ONE_MINUTES * 3,
    recipe: [
      {
        type: ItemType.Ore,
        key: OreKey.Einherjer,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.ManganeseAlloy,
    name: "망간 합금",
    value: 234000,
    time: ONE_MINUTES * 4,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.RefinedManganese,
        quantity: 2,
      },
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.RefinedCarbon,
        quantity: 10,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.CobaltAlloy,
    name: "코발트 합금",
    value: 340000,
    time: ONE_MINUTES * 8,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.RefinedCobalt,
        quantity: 15,
      },
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.RefinedTin,
        quantity: 30,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.KriptoniteAlloy,
    name: "크립토나이트 합금",
    value: 780000,
    time: ONE_MINUTES * 10,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.RefinedEinherjer,
        quantity: 2,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Kriptonite,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.CoreiumAlloy,
    name: "코레윰 합금",
    value: 1640000,
    time: ONE_MINUTES * 12,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.ManganeseAlloy,
        quantity: 2,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Coreium,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.CerythiumAlloy,
    name: "세리튬 합금",
    value: 3110000,
    time: ONE_MINUTES * 14,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.KriptoniteAlloy,
        quantity: 2,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Cerythium,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.EtheriumAlloy,
    name: "에테륨 합금",
    value: 7000000,
    time: ONE_MINUTES * 16,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.CoreiumAlloy,
        quantity: 2,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Etherium,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.CosmiumAlloy,
    name: "코스뮴 합금",
    value: 14500000,
    time: ONE_MINUTES * 18,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.CerythiumAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Cosmium,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.GalaxiumAlloy,
    name: "갤럭시움 합금",
    value: 31000000,
    time: ONE_MINUTES * 20,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.EtheriumAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Galaxium,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.MythrilAlloy,
    name: "미스릴 합금",
    value: 68000000,
    time: ONE_MINUTES * 24,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.CosmiumAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Mythril,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.XenonAlloy,
    name: "제논 합금",
    value: 152000000,
    time: ONE_MINUTES * 28,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.GalaxiumAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Xenon,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.WraythAlloy,
    name: "레이스 합금",
    value: 352000000,
    time: ONE_MINUTES * 32,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.MythrilAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Wrayth,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.AuroriumAlloy,
    name: "오로륨 합금",
    value: 823000000,
    time: ONE_MINUTES * 36,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.XenonAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Aurorium,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.TungstenAlloy,
    name: "텅스텐 합금",
    value: 2050000000,
    time: ONE_MINUTES * 40,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.WraythAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Tungsten,
        quantity: 1000,
      },
    ],
  },
  {
    type: ItemType.RefinedOre,
    key: RefinedOreKey.ZytherAlloy,
    name: "자이더 합금",
    value: 5120000000,
    time: ONE_MINUTES * 44,
    recipe: [
      {
        type: ItemType.RefinedOre,
        key: RefinedOreKey.AuroriumAlloy,
        quantity: 1,
      },
      {
        type: ItemType.Ore,
        key: OreKey.Zyther,
        quantity: 1000,
      },
    ],
  },
];
