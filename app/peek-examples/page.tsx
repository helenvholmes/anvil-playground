"use client";

import EditIcon from "@servicetitan/hammer-icon/mdi/filled/edit.svg";

import {
  AnvilProvider,
  Grid,
  Text,
  Link,
  Popover,
  Flex,
  Avatar,
  Toolbar,
} from "@servicetitan/anvil2";

export default function PeekExamples() {
  return (
    <AnvilProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          padding: "4rem",
          margin: "auto",
          minWidth: "600px",
          overflowX: "scroll",
        }}
      >
        <Link href="/" appearance="primary">
          Back
        </Link>

        <Grid templateColumns="repeat(3, 1fr)" gap="14" justifyItems="center">
          <Popover open placement="top" disableShift disableFlip>
            <Popover.Button>Trigger</Popover.Button>
            <Popover.Content>
              <Flex gap="6" justifyContent="center">
                <Avatar image="/dog-01.png" name="Dog01" size="large" />
                <Flex direction="column">
                  <Text>
                    <b>Jane Doe</b>
                  </Text>
                  <Text subdued>Customer since 2018</Text>
                </Flex>
              </Flex>
            </Popover.Content>
          </Popover>
          <Popover open placement="top" disableShift disableFlip>
            <Popover.Button>Trigger</Popover.Button>
            <Popover.Content>
              <Flex gap="6" justifyContent="center">
                <Avatar image="/dog-01.png" name="Dog01" size="large" />
                <Flex direction="column">
                  <Text>
                    <b>Jane Doe</b>
                  </Text>
                  <Text subdued>Customer since 2018</Text>
                  <Toolbar
                    associatedContent="playground toolbar"
                    // additionalItems={additionalItems}
                    overflow="collapse"
                  >
                    <Toolbar.Button
                      // icon={EditIcon}
                      onClick={console.log}
                      aria-label="Edit option"
                    >
                      hi
                    </Toolbar.Button>
                  </Toolbar>
                </Flex>
              </Flex>
            </Popover.Content>
          </Popover>
          <div>Peek</div>
        </Grid>
      </div>
    </AnvilProvider>
  );
}
