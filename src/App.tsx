import React, { useState } from "react";
import { MacOutput } from "./components/MacOutput";
import { OutlookOutput } from "./components/OutlookOutput";
import { SignatureForm } from "./components/SignatureForm";

export interface ISignatureInfo {
  firstName: string | undefined;
  lastName: string | undefined;
  title: string | undefined;
  tel: string | undefined;
  mobilNumber: string | undefined;
  fax: string | undefined;
  email: string | undefined;
  setSignatureInfo?: React.Dispatch<React.SetStateAction<ISignatureInfo>>;
}

const App = () => {
  const [signatureInfo, setSignatureInfo] = useState<ISignatureInfo>();
  return (
    <div className="App">
      <SignatureForm setSignatureInfo={setSignatureInfo} {...signatureInfo} />
      <OutlookOutput {...signatureInfo} />
      <MacOutput />
    </div>
  );
};

export default App;
