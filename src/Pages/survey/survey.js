import React from "react";

export default function SurveyForm(props) {
  const { dataKey="Bn9iQ-ZW3Ee2LZ6v7R1cyQ", dataForm= "1" } = props;

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.cognitoforms.com/f/seamless.js";
    script.async = true;
    
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-key={dataKey}
      data-spinner={dataForm}
    />
  );
}