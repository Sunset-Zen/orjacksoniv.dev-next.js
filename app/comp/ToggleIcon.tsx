import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const ToggleIcon = (props: any) => {
  // TSX
  return (
    <Button variant="ghost" size="icon">
      <HamburgerMenuIcon className="h-6 w-6" />
    </Button>
  );
};

export default ToggleIcon;
