// types.d.ts

declare module "react-barcode-reader" {
  export interface BarcodeReaderProps {
    onScan?: (barcode: string) => void;
    onError?: (barcode: string) => void;
    onReceive?: (char: string) => void;
    onKeyDetect?: (char: string) => void;
    timeBeforeScanTest?: number;
    avgTimeByChar?: number;
    minLength?: number;
    endChar?: number[];
    startChar?: number[];
    scanButtonKeyCode?: number;
    scanButtonLongPressThreshold?: number;
    onScanButtonLongPressed?: () => void;
    stopPropagation?: boolean;
    preventDefault?: boolean;
    testCode?: string;
  }

  export default class BarcodeReader extends React.Component<
    BarcodeReaderProps,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  > {}
}
