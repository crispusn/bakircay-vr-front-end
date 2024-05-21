import { ComponentInternals, Image, ImageProperties } from "@react-three/uikit";
import React, { ReactNode, RefAttributes, forwardRef } from "react";

export type AvatarProperties = ImageProperties;

export const Avatar: (
  props: AvatarProperties & RefAttributes<ComponentInternals<ImageProperties>>
) => ReactNode = forwardRef((props, ref) => {
  return (
    <Image
      width={60}
      height={60}
      flexShrink={0}
      aspectRatio={1}
      objectFit="cover"
      borderRadius={20}
      ref={ref}
      {...props}
    />
  );
});
