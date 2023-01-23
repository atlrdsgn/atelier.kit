import * as React from 'react'

import {VectorProps} from '../types.svg'

/**
 * Atelier.Icxn©
 *
 * copyright © 2022 Atelier® Design. All rights reserved.
 */
export const ArrowDownIcon = React.forwardRef<SVGSVGElement, VectorProps>(
  ({color = 'currentColor', ...props}, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={forwardedRef}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.3836 7.1318C14.5593 7.30754 14.5593 7.59246 14.3836 7.7682L10.0864 12.0654L14.3836 16.3626C14.5593 16.5383 14.5593 16.8232 14.3836 16.999C14.2078 17.1747 13.9229 17.1747 13.7472 16.999L9.1318 12.3836C9.04741 12.2992 9 12.1847 9 12.0654C9 11.946 9.04741 11.8316 9.1318 11.7472L13.7472 7.1318C13.9229 6.95607 14.2078 6.95607 14.3836 7.1318Z"
        />
        <path d="M14.3836 7.7682L13.924 7.30858L13.924 7.30858L14.3836 7.7682ZM14.3836 7.1318L13.924 7.59142L13.924 7.59142L14.3836 7.1318ZM10.0864 12.0654L9.62678 12.525C9.50488 12.4031 9.4364 12.2378 9.4364 12.0654C9.4364 11.893 9.50488 11.7277 9.62678 11.6058L10.0864 12.0654ZM14.3836 16.3626L14.8432 15.9029L14.8432 15.903L14.3836 16.3626ZM14.3836 16.999L14.8432 17.4586L14.8432 17.4586L14.3836 16.999ZM13.7472 16.999L13.2876 17.4586L13.2876 17.4586L13.7472 16.999ZM9.1318 12.3836L8.67218 12.8432L8.67218 12.8432L9.1318 12.3836ZM9.1318 11.7472L8.67218 11.2876L8.67218 11.2876L9.1318 11.7472ZM13.7472 7.1318L13.2876 6.67218L13.2876 6.67218L13.7472 7.1318ZM13.924 7.30858C13.8459 7.38668 13.8459 7.51332 13.924 7.59142L14.8432 6.67218C15.2728 7.10176 15.2728 7.79824 14.8432 8.22782L13.924 7.30858ZM9.62678 11.6058L13.924 7.30858L14.8432 8.22782L10.546 12.525L9.62678 11.6058ZM13.924 16.8222L9.62678 12.525L10.546 11.6058L14.8432 15.9029L13.924 16.8222ZM13.924 16.5393C13.8459 16.6175 13.8459 16.7441 13.924 16.8222L14.8432 15.903C15.2728 16.3325 15.2728 17.029 14.8432 17.4586L13.924 16.5393ZM14.2068 16.5393C14.1287 16.4612 14.0021 16.4612 13.924 16.5393L14.8432 17.4586C14.4136 17.8882 13.7171 17.8882 13.2876 17.4586L14.2068 16.5393ZM9.59142 11.924L14.2068 16.5393L13.2876 17.4586L8.67218 12.8432L9.59142 11.924ZM9.65 12.0654C9.65 12.0123 9.62893 11.9615 9.59142 11.924L8.67218 12.8432C8.46589 12.6369 8.35 12.3571 8.35 12.0654H9.65ZM9.59142 12.2068C9.62893 12.1693 9.65 12.1184 9.65 12.0654H8.35C8.35 11.7736 8.46589 11.4939 8.67218 11.2876L9.59142 12.2068ZM14.2068 7.59142L9.59142 12.2068L8.67218 11.2876L13.2876 6.67218L14.2068 7.59142ZM13.924 7.59142C14.0021 7.66953 14.1287 7.66953 14.2068 7.59142L13.2876 6.67218C13.7171 6.24261 14.4136 6.24261 14.8432 6.67218L13.924 7.59142Z" />
      </svg>
    )
  }
)
