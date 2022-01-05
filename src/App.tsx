import React, { useState } from "react";
import { SignatureForm } from "./components/SignatureForm";

export interface ISignatureInfo {
  firstName: string | undefined;
  lastName: string | undefined;
  title: string | undefined;
  mobilNumber: string | undefined;
  fax: string | undefined;
  email: string | undefined;
}

const App = () => {
  const [signatureInfo, setSignatureInfo] = useState<ISignatureInfo>({
    firstName: "Hallo",
    lastName: "",
    title: "",
    mobilNumber: "",
    fax: "",
    email: "",
  });
  return (
    <div className="App">
      <SignatureForm {...signatureInfo} />
    </div>
  );
};

export default App;
