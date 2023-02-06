import * as React from 'react';
import ReactPlayer from 'react-player/vimeo';
import type { baseElementProps } from '../@shared';
import { Override } from '../utils/types';
type videoProps = Override<React.ComponentPropsWithoutRef<typeof ReactPlayer>, {
    id?: string;
    ratio?: number;
    controls?: boolean;
    loop?: boolean;
}>;
type VideoPrimitiveProps = baseElementProps & videoProps & React.HTMLAttributes<HTMLVideoElement>;
export declare const VideoPlayer: React.ForwardRefExoticComponent<Pick<VideoPrimitiveProps, string | number> & React.RefAttributes<unknown>>;
export {};
//# sourceMappingURL=video.player.d.ts.map