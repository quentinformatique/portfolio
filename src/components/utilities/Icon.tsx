interface Properties {
  className?: string,
  icon: string,
}

export default function Icon({ className = "", icon }: Properties) {
  return <span className={`${className} material-symbols-outlined`}>
    {icon}
  </span>;
}