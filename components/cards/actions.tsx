import { Product, User } from "@/lib/types";
import { Tooltip } from "@nextui-org/react";
import { Edit, Trash2 } from "lucide-react";

interface ActionsProps {
  action: (id: string | number) => void;
  secondaryAction: (id: string | number) => void;
  item: Product | User;
}

export default function Actions({
  action,
  secondaryAction,
  item,
}: ActionsProps) {
  return (
    <div className="flex gap-5">
      <Tooltip
        content="Editar"
        className="bg-[#646464] text-white p-2 rounded-[4px] text-sm"
      >
        <Edit
          size={20}
          className="text-[#acacac] hover:text-[#7f7f7f] cursor-pointer"
          onClick={() => action(item.id)}
        />
      </Tooltip>
      <Tooltip
        content="Eliminar"
        className="bg-[#646464] text-white p-2 rounded-[4px] text-sm"
      >
        <Trash2
          size={20}
          className="text-[#acacac] hover:text-[#7f7f7f] cursor-pointer"
          onClick={() => secondaryAction(item.id)}
        />
      </Tooltip>
    </div>
  );
}
