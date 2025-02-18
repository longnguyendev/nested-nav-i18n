import { useParams } from "react-router";

export const Other = () => {
  const params = useParams();
  const { path } = params;
  return (
    <>
      <div>{path}</div>
    </>
  );
};
