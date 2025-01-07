import {Color} from "../branding/Color.ts";

interface Properties {
  children: string,
  className?: string,
  color?: Color,
}

export default function Button({ children,
                                 className = "",
                                 color = Color.secondary }: Properties) {

  function getColorClasses() {
    switch (color) {
      case Color.blue:
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";

      case Color.secondary:
        return "dark:bg-purple bg-blue hover:bg-gray-700 dark:text-white text-black";

      case Color.success:
        return "bg-green-600 hover:bg-green-700 text-white";

      case Color.warning:
        return "bg-yellow-600 hover:bg-yellow-700 text-black";

      case Color.danger:
        return "bg-red-600 hover:bg-red-700 text-white";
    }
  }

  return <button className={`${getColorClasses()} ${className} 
                             p-1.5 text-sm block w-full active:opacity-60`}>

    {children}
  </button>;
}