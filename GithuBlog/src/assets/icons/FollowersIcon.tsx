import React from "react";
interface FollowersIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number;
}

export const FollowersIcon: React.FC<FollowersIconProps> = ({ size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.469 9a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zm1.337 1.266H5.132a4.57 4.57 0 00-4.57 4.57c0 .505.41.914.914.914h9.984a.914.914 0 00.915-.915 4.57 4.57 0 00-4.57-4.57zm5.389.421h-1.947a5.341 5.341 0 011.97 4.148c0 .338-.1.649-.263.915h3.639a.85.85 0 00.843-.867c0-2.308-1.887-4.195-4.242-4.195zM11.953 9a2.952 2.952 0 002.953-2.953 2.952 2.952 0 00-2.953-2.953c-.662 0-1.267.225-1.76.593.305.584.495 1.237.495 1.938 0 .937-.315 1.797-.833 2.497.535.54 1.275.878 2.098.878z"
      fill="#3A536B"
    />
  </svg>
);
