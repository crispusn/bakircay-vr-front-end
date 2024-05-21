import { useState } from "react";
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
  const [activeTab, setActiveTab] = useState("Anasayfa");
  const texture = useTexture("/gradient.png");
  const logo = useTexture("/bakircay2.png");

  const renderCardContent = () => {
    switch (activeTab) {
      case "Anasayfa":
        return (
          <>
            <Input defaultValue="#giriskodu" className="col-span-3" />
            <Text fontSize={20} fontWeight="bold">
              Derse Giris Kodunu Giriniz.
            </Text>
            <Button variant="rect" size="md" platter>
              <Text>Baglan</Text>
            </Button>
          </>
        );

      case "Ders Programı":
        return (
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
        );

      case "Dersler":
        return (
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
        );
      case "Ders Hazırlığı":
        return (
          <>
            <Text fontSize={24} fontWeight="bold">
              Ders Hazırlığı
            </Text>
            <Input defaultValue="Hazırlık Notları" className="col-span-3" />
          </>
        );
      default:
        return null;
    }
  };

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
          {renderCardContent()}
        </Card>

        <TabBar defaultValue="Anasayfa" onValueChange={setActiveTab}>
          <TabBarItem value="Anasayfa" icon={<BoxSelect />}>
            <Text>Anasayfa</Text>
          </TabBarItem>
          <TabBarItem value="Ders Programı" icon={<BoxSelect />}>
            <Text>Ders Programı</Text>
          </TabBarItem>
          <TabBarItem value="Dersler" icon={<BoxSelect />}>
            <Text>Dersler</Text>
          </TabBarItem>
          <TabBarItem value="Ders Hazırlığı" icon={<BoxSelect />}>
            <Text>Ders Hazırlığı</Text>
          </TabBarItem>
        </TabBar>
      </Root>
    </>
  );
}

export default SidePlatesVr;
