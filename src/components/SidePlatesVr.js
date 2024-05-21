import { useTexture } from "@react-three/drei";
import FakeGlowMaterial from "./FakeGlowMaterial";
import { Html } from "@react-three/drei";
import { Interactive, toggleSession } from "@react-three/xr";
import {
  Button,
  List,
  ListItem,
  Tabs,
  TabsButton,
  Card,
  TabBar,
  TabBarItem,
} from "@react-three/uikit-apfel";
import { BoxSelect, ChevronRight, Info } from "@react-three/uikit-lucide";

import { Fullscreen, Container, Text, Root, Input } from "@react-three/uikit";
import { Avatar } from "./default/avatar";

function SidePlatesVr() {
  const texture = useTexture("/gradient.png");
  const logo = useTexture("/bakircay2.png");

  return (
    <>
      <group>
        <mesh position={[4.5, 3, 0]} scale={[0.1, 8, 14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
          <FakeGlowMaterial glowColor="#00A5B5" glowSharpness={3.0} />
        </mesh>
      </group>

      <group>
        <mesh position={[-4.5, 3, 0]} scale={[0.1, 8, 14]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial map={texture} />
          <FakeGlowMaterial glowColor="#00A5B5" glowSharpness={3.0} />
        </mesh>
      </group>

      <group>
        <mesh position={[0, 0, -1]} scale={[16, 8, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>

      <Root
        gap={100}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <Container alignItems="center">
          <Avatar src="/avatar.jpg" />
        </Container>
        <Card
          width={400}
          height={200}
          borderRadius={32}
          padding={16}
          flexDirection="column"
          alignItems="flex-start"
          gapRow={16}
        >
          <Input defaultValue="#giriskodu" className="col-span-3" />
          <Text fontSize={20} fontWeight="bold">
            Derse Giris Kodunu Giriniz.
          </Text>
          <Button variant="rect" size="md" platter>
            <Text>Baglan</Text>
          </Button>
        </Card>

        {/* <Card
          width={400}
          height={200}
          borderRadius={32}
          padding={16}
          flexDirection="column"
          alignItems="flex-start"
          gapRow={16}
        >
          <Text fontSize={24} fontWeight="bold">
            Ders Programi
          </Text>
          <Input defaultValue="something" className="col-span-3" />
        </Card> */}

        <Card borderRadius={32} padding={16}>
          <List type="plain" width={400}>
            <ListItem
              subtitle={<Text>13.30 17.05.2024</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <Button variant="icon" size="xs" platter>
                  <Info height={14} width={14} />
                </Button>
              }
            >
              <Text>Isletim Sistemleri</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>15.30 17.05.2024</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <Button variant="icon" size="xs" platter>
                  <Info height={14} width={14} />
                </Button>
              }
            >
              <Text>Yapay Zeka</Text>
            </ListItem>
            <ListItem
              subtitle={<Text>17.30 17.05.2024</Text>}
              leadingAccessory={<BoxSelect height={16} width={16} />}
              trailingAccessory={
                <Button variant="icon" size="xs" platter>
                  <Info height={14} width={14} />
                </Button>
              }
            >
              <Text>UI && UX Dizayn ve Tasarim Surecleri</Text>
            </ListItem>
          </List>
        </Card>

        {/* <Card
          borderRadius={32}
          padding={16}
          flexDirection="column"
          alignItems="flex-start"
          gapRow={16}
        >
          <Tabs defaultValue="1">
            <TabsButton value="1">
              <Text>Anasayfa</Text>
            </TabsButton>
            <TabsButton value="2">
              <Text>Dersler</Text>
            </TabsButton>
            <TabsButton value="3">
              <Text>Ders Hazirligi</Text>
            </TabsButton>
          </Tabs>
        </Card> */}

        <TabBar defaultValue="1">
          <TabBarItem value="Anasayfa" icon={<BoxSelect />}>
            <Text>Anasayfa</Text>
          </TabBarItem>
          <TabBarItem value="Dersler" icon={<BoxSelect />}>
            <Text>Dersler</Text>
          </TabBarItem>
          <TabBarItem value="Ders Hazırlığı" icon={<BoxSelect />}>
            <Text>Ders Hazirligi</Text>
          </TabBarItem>
        </TabBar>
      </Root>
    </>
  );
}

export default SidePlatesVr;
