import React, { forwardRef } from 'react'
import { IconProps } from '../lib/Icon'

const WifiFull = forwardRef<SVGSVGElement, IconProps>(
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
            <title>ph-wifi-full</title>
            <g
              id='Page-1'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g
                id='REFACTOR---Testing-32-line-style-MEDIUM---REFACTOR'
                transform='translate(-236.000000, -932.000000)'
              >
                <g
                  id='ph-wifi-full'
                  transform='translate(236.000000, 932.000000)'
                >
                  <polygon id='Fill-1' points='0 16 16 16 16 0 0 0'></polygon>
                  <path
                    d='M7.9995,11.75 C8.4135,11.75 8.7495,12.086 8.7495,12.5 C8.7495,12.915 8.4135,13.25 7.9995,13.25 C7.5855,13.25 7.2495,12.915 7.2495,12.5 C7.2495,12.086 7.5855,11.75 7.9995,11.75 Z M7.9996,8.9999 C8.9633812,8.9999 9.86892749,9.37072533 10.5393427,10.0196299 C10.7377621,10.2116829 10.7429231,10.5282233 10.5508701,10.7266427 C10.3588171,10.9250621 10.0422767,10.9302231 9.84385728,10.7381701 C9.3589028,10.2687757 8.7023151,9.9999 7.9996,9.9999 C7.2968849,9.9999 6.6402972,10.2687757 6.15534272,10.7381701 C5.95692332,10.9302231 5.6403829,10.9250621 5.4483299,10.7266427 C5.2562769,10.5282233 5.26143789,10.2116829 5.45985728,10.0196299 C6.13027251,9.37072533 7.0358188,8.9999 7.9996,8.9999 Z M7.999,6.0003 C9.77097197,6.0003 11.43353,6.6919173 12.6634714,7.90069128 C12.860421,8.09425131 12.8631687,8.41082187 12.6696087,8.60777143 C12.4760487,8.80472099 12.1594781,8.80746874 11.9625286,8.61390872 C10.9181209,7.58747548 9.50662746,7.0003 7.999,7.0003 C6.49224543,7.0003 5.08079492,7.58755819 4.03647143,8.61390872 C3.83952187,8.80746874 3.52295131,8.80472099 3.32939128,8.60777143 C3.13583126,8.41082187 3.13857901,8.09425131 3.33552857,7.90069128 C4.56537078,6.69201484 6.22787849,6.0003 7.999,6.0003 Z M7.9994,3.0002 C10.5781903,3.0002 12.9969145,4.01207555 14.7841134,5.78081616 C14.9803865,5.97506211 14.9820298,6.29164034 14.7877838,6.48791341 C14.5935379,6.68418649 14.2769597,6.6858298 14.0806866,6.49158384 C12.479177,4.90661474 10.3125397,4.0002 7.9994,4.0002 C5.68626029,4.0002 3.51962301,4.90661474 1.91811341,6.49158384 C1.72184034,6.6858298 1.40526211,6.68418649 1.21101616,6.48791341 C1.0167702,6.29164034 1.01841351,5.97506211 1.21468659,5.78081616 C3.00188551,4.01207555 5.42060971,3.0002 7.9994,3.0002 Z'
                    id='Combined-Shape'
                    fill={color}
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

WifiFull.displayName = 'WifiFull'

export default WifiFull