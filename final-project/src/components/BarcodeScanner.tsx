// import { useState } from "react";
import { useZxing } from "react-zxing";

const BarcodeScanner = ({ onScan }: { onScan: (result: string) => void }) => {
  // const [result, setResult] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      const text = result.getText();
      if (text.length !== 13) {
        return;
      }
      // setResult(result.getText());
      onScan(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      {/* <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p> */}
    </>
  );

}

export default BarcodeScanner;