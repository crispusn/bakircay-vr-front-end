import { useTexture } from "@react-three/drei";
import FakeGlowMaterial from "./FakeGlowMaterial";
import { Html } from "@react-three/drei";
import { Interactive, toggleSession } from "@react-three/xr";
import {
  Button,
  Card,
  Avatar,
  List,
  ListItem,
  Tabs,
  TabsButton,
} from "@react-three/uikit-apfel";
import { BoxSelect, ChevronRight, Info } from "@react-three/uikit-lucide";

import { Fullscreen, Container, Text, Root } from "@react-three/uikit";
// import Tabs from "./apfel/tabs";
import TabsX from "../components/Tabs";

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
        <mesh position={[0, 2, -1]} scale={[16, 8, 0.1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <Interactive>
          {/* <Html
            position={[0, 0, 0]} // Yeni pozisyon
            width={6} // Genişlik ayarı
            height={0.2}
            rotation={[0, Math.PI, 0]}
            fontSize={20}
            color="red"
          >
            <button className="btn">Giriş Yap</button>
          </Html> */}
          <Root flexDirection="row" padding={100} gap={100}>
            {/* <Container
                flexGrow={1}
                backgroundOpacity={0.5}
                hover={{ backgroundOpacity: 1 }}
                backgroundColor="red"
              />
              <Container
                flexGrow={1}
                backgroundOpacity={0.5}
                hover={{ backgroundOpacity: 1 }}
                backgroundColor="blue"
              /> */}

            <Container flexDirection="row" gapRow={18} alignItems="center">
              <Container
                flexDirection="column"
                md={{ flexDirection: "row" }}
                gap={32}
              >
                <Card borderRadius={32} padding={12}>
                  <List type="plain" width={400}>
                    <ListItem
                      subtitle={<Text>BIL101</Text>}
                      trailingAccessory={
                        <ChevronRight height={18} width={18} opacity={0.3} />
                      }
                    >
                      <Text>Bilgisayar Muh</Text>
                    </ListItem>
                    <ListItem
                      trailingAccessory={
                        <ChevronRight height={18} width={18} opacity={0.3} />
                      }
                    >
                      <Text>BIL101</Text>
                    </ListItem>
                    <ListItem
                      subtitle={<Text>Bilgisayar Muh</Text>}
                      selected
                      trailingAccessory={
                        <ChevronRight height={18} width={18} opacity={0.3} />
                      }
                    >
                      <Text>BIL101</Text>
                    </ListItem>
                  </List>
                </Card>
              </Container>
            </Container>

            <Card
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
            </Card>
          </Root>
        </Interactive>
      </group>
    </>
  );
}

export default SidePlatesVr;
