import { Button, Glass, IconButton } from "@coconut-xr/apfel-kruemel";
import { Container, Text } from "@coconut-xr/koestlich";
import { BoxSelect } from "@coconut-xr/lucide-koestlich";
export default function TabsX() {
  return (
    <Glass borderRadius={32} padding={16}>
      <IconButton size="md">
        <BoxSelect />
      </IconButton>
    </Glass>
  );
}
