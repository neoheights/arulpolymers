/**
 * Products navigation tree — source of truth for the header Products dropdown
 * and the Products landing-page category grid.
 *
 * Categories without items are intentionally empty: their second-level
 * structure is ready and will be filled once client content is provided.
 */

export type ProductNode = {
  label: string;
  to?: string;
  hash?: string;
  children?: ProductNode[];
};

export type ProductCategory = {
  label: string;
  to: string;
  children: ProductNode[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    label: "Automobile",
    to: "/products/automobile",
    children: [
      { label: "Bellows for Hydraulic Systems", to: "/products/automobile", hash: "bellows" },
      { label: "Engine Exhaust System Rubber Parts", to: "/products/automobile", hash: "engine-exhaust" },
      { label: "Engine Gaskets", to: "/products/automobile", hash: "engine-gaskets" },
      { label: "EV Rubber Parts", to: "/products/automobile", hash: "ev-rubber-parts" },
      { label: "Footrest", to: "/products/automobile", hash: "footrest" },
      { label: "Fuel Filter Rubber Parts", to: "/products/automobile", hash: "fuel-filter" },
      { label: "Rubber-to-Metal Bonding Parts", to: "/products/automobile", hash: "rubber-metal-bonding" },
      { label: "O-Rings and Seals", to: "/products/automobile", hash: "o-rings-seals" },
      { label: "Suspension Parts", to: "/products/automobile", hash: "suspension" },
      { label: "Swing Arm Bushes", to: "/products/automobile", hash: "swing-arm-bushes" },
      { label: "Three Wheelers", to: "/products/automobile", hash: "three-wheelers" },
    ],
  },
  {
    label: "Mining",
    to: "/products/mining",
    children: [
      {
        label: "Wear Resistance Products",
        children: [
          { label: "Ball Mill Liner", to: "/products/mining", hash: "ball-mill-liner" },
          { label: "Ceramic Wear Pad", to: "/products/mining", hash: "ceramic-wear-pad" },
          { label: "Chute Liners", to: "/products/mining", hash: "chute-liners" },
          { label: "Slurry Hoses", to: "/products/mining", hash: "slurry-hoses" },
          { label: "PU Screens", to: "/products/mining", hash: "pu-screens" },
          { label: "Slurry Pipelines and Tank", to: "/products/mining", hash: "slurry-pipelines-and-tank" },
        ],
      },
      {
        label: "Filtration Parts",
        children: [
          { label: "Filling Shoe & Inlet Feed Collars", to: "/products/mining", hash: "filling-shoe-inlet-feed-collars" },
          { label: "Pinch Valve Sleeves", to: "/products/mining", hash: "pinch-valve-sleeves" },
        ],
      },
      {
        label: "Material Handling",
        children: [
          { label: "Ceramic Embedded Pulley", to: "/products/mining", hash: "ceramic-embedded-pulley" },
          { label: "Arul Bond Adhesive", to: "/products/mining", hash: "arul-bond-adhesive" },
          { label: "Conveyor Impact Bar", to: "/products/mining", hash: "conveyor-impact-bar" },
        ],
      },
    ],
  },
  {
    label: "Potable Water",
    to: "/products/potable-water",
    children: [
      { label: "Tyton Gaskets", to: "/products/potable-water", hash: "tyton-gaskets" },
      { label: "Wedge", to: "/products/potable-water", hash: "wedge" },
      { label: "WRAS Approved Seals & O Rings", to: "/products/potable-water", hash: "wras-seals-o-rings" },
    ],
  },
  {
    label: "Aerospace & Defence",
    to: "/products/aerospace-defence",
    children: [],
  },
  {
    label: "Oil & Gas",
    to: "/products/oil-gas",
    children: [],
  },
  {
    label: "Agriculture",
    to: "/products/agriculture",
    children: [{ label: "Tiller Tyre", to: "/products/agriculture", hash: "tiller-tyre" }],
  },
  { label: "ATM Rubber Parts", to: "/products/atm-rubber-parts", children: [] },
  { label: "Plastic Parts", to: "/products/plastic-parts", children: [] },
];
