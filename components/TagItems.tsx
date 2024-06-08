import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface TagItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
  className: string;
}

const TagItem: React.FC<TagItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
  className,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row h-auto items-center w-full gap-x-4 text-sm font-normal cursor-pointer hover:text-white transition text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      <Icon size={20} className={className} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};
export default TagItem;
