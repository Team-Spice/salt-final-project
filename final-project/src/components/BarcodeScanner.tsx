import { useEffect } from "react";
import { useZxing } from "react-zxing";
// import Spinner from "./Spinner";

const BarcodeScanner = ({ loading, onScan }: { loading: boolean, onScan: (result: string) => void }) => {

  useEffect(() => {

  },[loading])

  const { ref } = useZxing({
    onDecodeResult(result) {
      const text = result.getText();
      if (loading || text.length !== 13) {
        console.log("loading...",loading);
        return;
      }
      onScan(result.getText());
    },
  });

  return (
    <>
      {loading ? <p>Loading...</p> : <video ref={ref} />}
    </>
  );

}

export default BarcodeScanner;