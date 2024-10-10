export default function Slidebar({ children }) {
  return (
    <div className="h-full flex max-w-full gap-4 overflow-x-scroll flex-nowrap ">
      {children}
    </div>
  );
}
