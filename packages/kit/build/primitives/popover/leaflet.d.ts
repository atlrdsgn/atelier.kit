import { ReactNode, Dispatch, SetStateAction } from "react";
export default function Leaflet({ setShow, children, }: {
    setShow: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}): JSX.Element;
