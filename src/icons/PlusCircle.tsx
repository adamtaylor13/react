import React, { forwardRef } from "react";
import { IconProps } from "../lib";

const PlusCircle = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = "currentColor", size = "1.25em", weight = "regular", ...rest },
    ref
  ) => {
    switch (weight) {
      case "thin":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M7.9996,1.7498 C11.4513323,1.7498 14.2496,4.54838987 14.2496,7.9998 C14.2496,11.4518712 11.4516712,14.2498 7.9996,14.2498 C4.54818987,14.2498 1.7496,11.4515323 1.7496,7.9998 C1.7496,4.54872881 4.54852881,1.7498 7.9996,1.7498 Z M7.9996,2.2498 C4.82467119,2.2498 2.2496,4.82487119 2.2496,7.9998 C2.2496,11.175377 4.82431936,13.7498 7.9996,13.7498 C11.1755288,13.7498 13.7496,11.1757288 13.7496,7.9998 C13.7496,4.82451936 11.175177,2.2498 7.9996,2.2498 Z M7.9996,5.7498 C8.11794673,5.7498 8.21708682,5.83203341 8.24299732,5.94247729 L8.2496,5.9998 L8.2496,7.7498 L9.9996,7.7498 C10.1376712,7.7498 10.2496,7.86172881 10.2496,7.9998 C10.2496,8.11814673 10.1673666,8.21728682 10.0569227,8.24319732 L9.9996,8.2498 L8.2496,8.2498 L8.2496,9.9998 C8.2496,10.1378712 8.13767119,10.2498 7.9996,10.2498 C7.88125327,10.2498 7.78211318,10.1675666 7.75620268,10.0571227 L7.7496,9.9998 L7.7496,8.2498 L5.9996,8.2498 C5.86152881,8.2498 5.7496,8.13787119 5.7496,7.9998 C5.7496,7.88145327 5.83183341,7.78231318 5.94227729,7.75640268 L5.9996,7.7498 L7.7496,7.7498 L7.7496,5.9998 C7.7496,5.86172881 7.86152881,5.7498 7.9996,5.7498 Z"
              />
            </g>
          </svg>
        );

      case "light":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M7.9996,1.6248 C11.5203711,1.6248 14.3746,4.4793575 14.3746,7.9998 C14.3746,11.5209068 11.5207068,14.3748 7.9996,14.3748 C4.4791575,14.3748 1.6246,11.5205711 1.6246,7.9998 C1.6246,4.47969322 4.47949322,1.6248 7.9996,1.6248 Z M7.9996,2.3748 C4.89370678,2.3748 2.3746,4.89390678 2.3746,7.9998 C2.3746,11.1063382 4.89335173,13.6248 7.9996,13.6248 C11.1064932,13.6248 13.6246,11.1066932 13.6246,7.9998 C13.6246,4.89355173 11.1061382,2.3748 7.9996,2.3748 Z M7.9996,5.6248 C8.18081843,5.6248 8.33201398,5.75334325 8.36698133,5.92422442 L8.3746,5.9998 L8.3746,7.6248 L9.9996,7.6248 C10.2067068,7.6248 10.3746,7.79269322 10.3746,7.9998 C10.3746,8.18101843 10.2460568,8.33221398 10.0751756,8.36718133 L9.9996,8.3748 L8.3746,8.3748 L8.3746,9.9998 C8.3746,10.2069068 8.20670678,10.3748 7.9996,10.3748 C7.81838157,10.3748 7.66718602,10.2462568 7.63221867,10.0753756 L7.6246,9.9998 L7.6246,8.3748 L5.9996,8.3748 C5.79249322,8.3748 5.6246,8.20690678 5.6246,7.9998 C5.6246,7.81858157 5.75314325,7.66738602 5.92402442,7.63241867 L5.9996,7.6248 L7.6246,7.6248 L7.6246,5.9998 C7.6246,5.79269322 7.79249322,5.6248 7.9996,5.6248 Z"
              />
            </g>
          </svg>
        );

      case "regular":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M7.9996,1.4998 C11.5894099,1.4998 14.4996,4.41032513 14.4996,7.9998 C14.4996,11.5899424 11.5897424,14.4998 7.9996,14.4998 C4.41012513,14.4998 1.4996,11.5896099 1.4996,7.9998 C1.4996,4.41065763 4.41045763,1.4998 7.9996,1.4998 Z M7.9996,2.4998 C4.96274237,2.4998 2.4996,4.96294237 2.4996,7.9998 C2.4996,11.0372994 4.96238411,13.4998 7.9996,13.4998 C11.0374576,13.4998 13.4996,11.0376576 13.4996,7.9998 C13.4996,4.96258411 11.0370994,2.4998 7.9996,2.4998 Z M7.9996,5.4998 C8.24505989,5.4998 8.44920837,5.67667516 8.49154433,5.90992437 L8.4996,5.9998 L8.4996,7.4998 L9.9996,7.4998 C10.2757424,7.4998 10.4996,7.72365763 10.4996,7.9998 C10.4996,8.24525989 10.3227248,8.44940837 10.0894756,8.49174433 L9.9996,8.4998 L8.4996,8.4998 L8.4996,9.9998 C8.4996,10.2759424 8.27574237,10.4998 7.9996,10.4998 C7.75414011,10.4998 7.54999163,10.3229248 7.50765567,10.0896756 L7.4996,9.9998 L7.4996,8.4998 L5.9996,8.4998 C5.72345763,8.4998 5.4996,8.27594237 5.4996,7.9998 C5.4996,7.75434011 5.67647516,7.55019163 5.90972437,7.50785567 L5.9996,7.4998 L7.4996,7.4998 L7.4996,5.9998 C7.4996,5.72365763 7.72345763,5.4998 7.9996,5.4998 Z"
              />
            </g>
          </svg>
        );

      case "bold":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                fillRule="nonzero"
                d="M7.9996,1.2498 C11.7274875,1.2498 14.7496,4.27226038 14.7496,7.9998 C14.7496,11.7280136 11.7278136,14.7498 7.9996,14.7498 C4.27206038,14.7498 1.2496,11.7276875 1.2496,7.9998 C1.2496,4.27258644 4.27238644,1.2498 7.9996,1.2498 Z M7.9996,2.7498 C5.10081356,2.7498 2.7496,5.10101356 2.7496,7.9998 C2.7496,10.8992218 5.10044885,13.2498 7.9996,13.2498 C10.8993864,13.2498 13.2496,10.8995864 13.2496,7.9998 C13.2496,5.10064885 10.8990218,2.7498 7.9996,2.7498 Z M7.9996,5.2498 C8.37929577,5.2498 8.69309096,5.53195388 8.74275338,5.89802944 L8.7496,5.9998 L8.7496,7.2498 L9.9996,7.2498 C10.4138136,7.2498 10.7496,7.58558644 10.7496,7.9998 C10.7496,8.37949577 10.4674461,8.69329096 10.1013706,8.74295338 L9.9996,8.7498 L8.7496,8.7498 L8.7496,9.9998 C8.7496,10.4140136 8.41381356,10.7498 7.9996,10.7498 C7.61990423,10.7498 7.30610904,10.4676461 7.25644662,10.1015706 L7.2496,9.9998 L7.2496,8.7498 L5.9996,8.7498 C5.58538644,8.7498 5.2496,8.41401356 5.2496,7.9998 C5.2496,7.62010423 5.53175388,7.30630904 5.89782944,7.25664662 L5.9996,7.2498 L7.2496,7.2498 L7.2496,5.9998 C7.2496,5.58558644 7.58538644,5.2498 7.9996,5.2498 Z"
              />
            </g>
          </svg>
        );

      case "fill":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                d="M9.9996,8.4998 L8.4996,8.4998 L8.4996,9.9998 C8.4996,10.2758 8.2756,10.4998 7.9996,10.4998 C7.7236,10.4998 7.4996,10.2758 7.4996,9.9998 L7.4996,8.4998 L5.9996,8.4998 C5.7236,8.4998 5.4996,8.2758 5.4996,7.9998 C5.4996,7.7238 5.7236,7.4998 5.9996,7.4998 L7.4996,7.4998 L7.4996,5.9998 C7.4996,5.7238 7.7236,5.4998 7.9996,5.4998 C8.2756,5.4998 8.4996,5.7238 8.4996,5.9998 L8.4996,7.4998 L9.9996,7.4998 C10.2756,7.4998 10.4996,7.7238 10.4996,7.9998 C10.4996,8.2758 10.2756,8.4998 9.9996,8.4998 M7.9996,1.4998 C4.4156,1.4998 1.4996,4.4158 1.4996,7.9998 C1.4996,11.5838 4.4156,14.4998 7.9996,14.4998 C11.5836,14.4998 14.4996,11.5838 14.4996,7.9998 C14.4996,4.4158 11.5836,1.4998 7.9996,1.4998"
              />
            </g>
          </svg>
        );

      case "duotone":
        return (
          <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            stroke={color}
            {...rest}
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <polygon points="0 16 15.999 16 15.999 0 0 0" />
              <path
                fill={color}
                d="M1.9996,7.9998 C1.9996,4.6868 4.6866,1.9998 7.9996,1.9998 C11.3136,1.9998 13.9996,4.6868 13.9996,7.9998 C13.9996,11.3138 11.3136,13.9998 7.9996,13.9998 C4.6866,13.9998 1.9996,11.3138 1.9996,7.9998"
                opacity=".2"
              />
              <path
                fill={color}
                fillRule="nonzero"
                d="M7.9996,1.4998 C11.5894099,1.4998 14.4996,4.41032513 14.4996,7.9998 C14.4996,11.5899424 11.5897424,14.4998 7.9996,14.4998 C4.41012513,14.4998 1.4996,11.5896099 1.4996,7.9998 C1.4996,4.41065763 4.41045763,1.4998 7.9996,1.4998 Z M7.9996,2.4998 C4.96274237,2.4998 2.4996,4.96294237 2.4996,7.9998 C2.4996,11.0372994 4.96238411,13.4998 7.9996,13.4998 C11.0374576,13.4998 13.4996,11.0376576 13.4996,7.9998 C13.4996,4.96258411 11.0370994,2.4998 7.9996,2.4998 Z M7.9996,5.4998 C8.24505989,5.4998 8.44920837,5.67667516 8.49154433,5.90992437 L8.4996,5.9998 L8.4996,7.4998 L9.9996,7.4998 C10.2757424,7.4998 10.4996,7.72365763 10.4996,7.9998 C10.4996,8.24525989 10.3227248,8.44940837 10.0894756,8.49174433 L9.9996,8.4998 L8.4996,8.4998 L8.4996,9.9998 C8.4996,10.2759424 8.27574237,10.4998 7.9996,10.4998 C7.75414011,10.4998 7.54999163,10.3229248 7.50765567,10.0896756 L7.4996,9.9998 L7.4996,8.4998 L5.9996,8.4998 C5.72345763,8.4998 5.4996,8.27594237 5.4996,7.9998 C5.4996,7.75434011 5.67647516,7.55019163 5.90972437,7.50785567 L5.9996,7.4998 L7.4996,7.4998 L7.4996,5.9998 C7.4996,5.72365763 7.72345763,5.4998 7.9996,5.4998 Z"
              />
            </g>
          </svg>
        );

      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        );
    }
  }
);

PlusCircle.displayName = "PlusCircle";

export default PlusCircle;