import { BoxProps } from "../../components/Box";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
  mode?: string;
}

export interface ModalProps extends InjectedProps, Omit<BoxProps, "title"> {
  title: any;
  hideCloseButton?: any;
  onBack?: () => void;
  bodyPadding?: any;
  headerBackground?: any;
}
