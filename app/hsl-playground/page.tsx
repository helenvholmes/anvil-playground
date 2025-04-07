"use client";
import { AnvilProvider, Button, Link } from "@servicetitan/anvil2";
import EditIcon from "@servicetitan/hammer-icon/mdi/filled/4k.svg";

export default function HSLPlayground() {
  return (
    <AnvilProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "1rem",
          margin: "auto",
          minWidth: "600px",
          overflowX: "scroll",
        }}
      >
        <Link href="/">Back</Link>
        <>HSL playground tbd</>

        <Button
          appearance="primary"
          size="medium"
          icon={EditIcon}
          onClick={console.log}
        />
      </div>
    </AnvilProvider>
  );
}
