import * as React from 'react'

export const LinkedIcon = ({color = 'currentColor', ...props}: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    role="img"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.0062 8.69389C13.4361 8.40184 13.9667 8.40369 14.3509 8.65595C14.4287 8.70709 14.5218 8.79465 14.8637 9.13649C15.2055 9.47833 15.2931 9.57144 15.3442 9.64931C15.5965 10.0334 15.5983 10.5641 15.3063 10.994C15.2457 11.0832 15.146 11.1876 14.793 11.5406L14.298 12.0356C14.0051 12.3285 14.0051 12.8034 14.298 13.0963C14.5909 13.3892 15.0658 13.3892 15.3587 13.0963L15.8536 12.6013L15.9045 12.5505C16.1834 12.2718 16.3957 12.0597 16.5471 11.8369C17.1628 10.9305 17.1997 9.74209 16.598 8.8259C16.4507 8.60157 16.2406 8.39178 15.9761 8.12756L15.9243 8.07583L15.8726 8.02405L15.8726 8.02405C15.6084 7.75952 15.3986 7.54948 15.1743 7.40216C14.2581 6.80047 13.0696 6.83741 12.1633 7.45311C11.9404 7.60451 11.7283 7.81679 11.4497 8.09571L11.3989 8.14654L10.9039 8.64151C10.611 8.9344 10.611 9.40928 10.9039 9.70217C11.1968 9.99506 11.6717 9.99507 11.9645 9.70217L12.4595 9.2072C12.8125 8.85419 12.917 8.75448 13.0062 8.69389ZM9.70181 11.9649C9.9947 11.672 9.9947 11.1971 9.70181 10.9043C9.40891 10.6114 8.93404 10.6114 8.64114 10.9043L8.14617 11.3992L8.09535 11.45L8.09534 11.45C7.81642 11.7287 7.60414 11.9408 7.45274 12.1637C6.83704 13.07 6.80011 14.2585 7.40179 15.1746C7.54911 15.399 7.75916 15.6088 8.02369 15.873L8.07546 15.9247L8.12718 15.9765C8.39141 16.241 8.60121 16.4511 8.82554 16.5984C9.74172 17.2001 10.9302 17.1631 11.8365 16.5474C12.0594 16.396 12.2715 16.1838 12.5501 15.9048L12.6009 15.854L13.0959 15.359C13.3888 15.0661 13.3888 14.5913 13.0959 14.2984C12.803 14.0055 12.3282 14.0055 12.0353 14.2984L11.5403 14.7933C11.1873 15.1464 11.0828 15.2461 10.9936 15.3066C10.5637 15.5987 10.0331 15.5968 9.64894 15.3446C9.57107 15.2934 9.47796 15.2059 9.13612 14.8641C8.79428 14.5222 8.70673 14.4291 8.65559 14.3512C8.40332 13.9671 8.40147 13.4365 8.69352 13.0065C8.75411 12.9174 8.85382 12.8129 9.20683 12.4599L9.70181 11.9649ZM13.8388 11.0099C14.0731 10.7756 14.0731 10.3957 13.8388 10.1614C13.6044 9.92709 13.2245 9.92709 12.9902 10.1614L10.1618 12.9898C9.92748 13.2241 9.92748 13.604 10.1618 13.8384C10.3961 14.0727 10.776 14.0727 11.0103 13.8384L13.8388 11.0099Z"
      fill={color}
    />
  </svg>
)
