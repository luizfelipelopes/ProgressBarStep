import { useState } from "react";
import { Text } from "react-native";

import { ProgressBar } from "../../Components/ProgressBar";
import { Meta } from "../../Components/Meta";
import { Genero } from "../../Components/Genero";
import { DataNascimento } from "../../Components/DataNascimento";

export function Steps() {
  const [status, setStatus] = useState();

  const steps = [
    { status: "meta" },
    { status: "genero" },
    { status: "data-nascimento" },
    { status: "done" }
  ];

  let contentComponent;

  switch (status) {
    case "meta":
      contentComponent = <Meta />;
      break;
    case "genero":
      contentComponent = <Genero />;
      break;
    case "data-nascimento":
      contentComponent = <DataNascimento />;
      break;
    case "done":
      contentComponent = <Text style={{ fontWeight: "bold" }}>DONE</Text>;
      break;

    default:
      contentComponent = <Meta />;
      break;
  }

  return (
    <ProgressBar steps={steps} setStatus={setStatus}>
      {contentComponent}
    </ProgressBar>
  );
}
