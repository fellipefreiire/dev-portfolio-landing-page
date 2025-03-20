type TechIconProps = {
  as: React.ElementType
}

export function TechIcon({ as }: TechIconProps) {
  const Component = as
  return <Component className="size-10" />
}
