"use client";

import React from "react";
import { Layer, Typography } from "@f1/ui-core";

export default function ClientComponent() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Layer variant="page">
        <Typography>F1</Typography>
      </Layer>
    </>
  );
}
