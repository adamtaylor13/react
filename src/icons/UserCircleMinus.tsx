/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../lib";
import IconBase, { RenderFunction } from "../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("bold", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
    <path
      d="M218.5374,96A95.90174,95.90174,0,1,1,143.13974,33.187"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="24"
    />
  </>
));

pathsByWeight.set("duotone", (color: string) => (
  <>
    <path
      d="M128,32A96.00088,96.00088,0,0,0,63.79883,199.375v-.001A71.99731,71.99731,0,0,1,128,160a40,40,0,1,1,40-40,40.0001,40.0001,0,0,1-40,40,71.99731,71.99731,0,0,1,64.20117,39.374A96.0002,96.0002,0,0,0,128,32Z"
      opacity="0.2"
    />
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.5374,96A95.90174,95.90174,0,1,1,143.13974,33.187"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

pathsByWeight.set("fill", () => (
  <>
    <path d="M128,76a44,44,0,1,1-44,44A43.99983,43.99983,0,0,1,128,76Zm48-12h48a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Zm39.87158,24.457a8.00076,8.00076,0,0,0-4.87695,10.209,88.016,88.016,0,0,1-17.23645,87.74414,79.7044,79.7044,0,0,0-24.431-22.97461,59.83641,59.83641,0,0,1-82.6543,0A79.70345,79.70345,0,0,0,62.2417,186.41016,87.9498,87.9498,0,0,1,128,40a89.04252,89.04252,0,0,1,13.8877,1.08838,7.99994,7.99994,0,0,0,2.5039-15.80274A104.08275,104.08275,0,0,0,24,128a103.74716,103.74716,0,0,0,33.81934,76.68066,7.94507,7.94507,0,0,0,1.32629,1.18946,103.784,103.784,0,0,0,137.71252-.00293,7.94633,7.94633,0,0,0,1.31678-1.18115A104.0138,104.0138,0,0,0,226.08008,93.334,8.00062,8.00062,0,0,0,215.87158,88.457Z" />
  </>
));

pathsByWeight.set("light", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
    <path
      d="M218.5374,96A95.90174,95.90174,0,1,1,143.13974,33.187"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </>
));

pathsByWeight.set("thin", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
    <path
      d="M218.5374,96A95.90174,95.90174,0,1,1,143.13974,33.187"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
    />
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle
      cx="128"
      cy="120"
      r="40"
      fill="none"
      stroke={color}
      strokeMiterlimit="10"
      strokeWidth="16"
    />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="56"
      x2="224"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M218.5374,96A95.90174,95.90174,0,1,1,143.13974,33.187"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const UserCircleMinus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} renderPath={renderPath} />
));

UserCircleMinus.displayName = "UserCircleMinus";

export default UserCircleMinus;
