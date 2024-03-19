import { cookies } from "next/headers";

export default () => {
  const cookieStore = cookies();
  const dd = cookieStore.getAll().map((item) => {
    return {
      name: item.name,
      value: item.value,
    };
  });
  return (
    <div>
      <div className="mr-4">bar page</div>
      <div> {JSON.stringify(dd)}</div>
    </div>
  );
};
