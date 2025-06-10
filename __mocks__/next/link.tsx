// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Link({ children, href }: any) {
  return <a href={href}>{children}</a>;
}
