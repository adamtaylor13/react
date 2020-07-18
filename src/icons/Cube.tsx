import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const Cube = forwardRef<SVGSVGElement, IconProps>(
  (
    { color = 'currentColor', size = '1em', weight = 'regular', ...rest },
    ref
  ) => {
    switch (weight) {
      case 'thin':
      case 'light':
      case 'regular':
        return (
          <svg
            ref={ref}
            xmlns='http://www.w3.org/2000/svg'
            width={size}
            height={size}
            viewBox='0 0 16 16'
            fill='none'
            stroke={color}
            {...rest}
          >
            {' '}
            <title>ph-cube</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-108.000000, -964.000000)'
              >
                <g id='ph-cube' transform='translate(108.000000, 964.000000)'>
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M7.74806449,0.56811055 C7.90374574,0.477296483 8.09625426,0.477296483 8.25193551,0.56811055 L8.25193551,0.56811055 L14.2419225,4.0623356 C14.2449707,4.06401679 14.248003,4.06573069 14.2510187,4.06747715 C14.2932282,4.09219796 14.3302463,4.12169391 14.3623041,4.15540447 C14.368691,4.16195645 14.3754379,4.1694791 14.3819795,4.17723953 C14.4136786,4.21486046 14.4397479,4.25701413 14.4592214,4.3022142 L14.4318895,4.24806449 C14.4560798,4.28953371 14.4736293,4.3330472 14.4848624,4.37737187 C14.4947342,4.41676912 14.5,4.45801153 14.5,4.5 L14.5,4.5 L14.5,11.5 C14.5,11.6778335 14.4055444,11.8422843 14.2519355,11.9318895 L14.2519355,11.9318895 L8.25762981,15.4286045 C8.23080653,15.4447624 8.20234269,15.4584735 8.17254723,15.4694288 C8.13317669,15.4837618 8.09256709,15.4930916 8.05155004,15.4973386 C8.03495224,15.4990925 8.0175821,15.5 8,15.5 L7.94904088,15.4973994 C7.87928555,15.4902605 7.81069488,15.4684238 7.74806449,15.4318895 L7.82745277,15.4694288 C7.79765731,15.4584735 7.76919347,15.4447624 7.74237019,15.4286045 L1.74806449,11.9318895 C1.59445563,11.8422843 1.5,11.6778335 1.5,11.5 L1.5,11.5 L1.5,4.5 C1.5,4.45801153 1.50526576,4.41676912 1.51533259,4.37708181 C1.52158467,4.35193239 1.53011235,4.32676013 1.54078202,4.30208818 C1.56025206,4.25701413 1.58632137,4.21486046 1.61816205,4.17718865 L1.56811055,4.24806449 C1.58823311,4.21356867 1.6118489,4.18237657 1.63824814,4.15467497 C1.66975365,4.12169391 1.70677178,4.09219796 1.74806449,4.06811055 L1.74806449,4.06811055 C1.75199699,4.06573069 1.75502927,4.06401679 1.75807753,4.0623356 Z M2.5,5.37 L2.5,11.213 L7.5,14.129 L7.5,8.286 L2.5,5.37 Z M13.5,5.369 L8.5,8.286 L8.5,14.129 L13.5,11.213 L13.5,5.369 Z M8,1.578 L2.991,4.5 L7.999,7.421 L13.008,4.499 L8,1.578 Z'
                    id='Combined-Shape'
                    fill={color}
                    fillRule='nonzero'
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        )
      case 'bold':
      case 'fill':
      case 'duotone':
      default:
        throw new Error(
          'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
        )
    }
  }
)

Cube.displayName = 'Cube'

export default Cube