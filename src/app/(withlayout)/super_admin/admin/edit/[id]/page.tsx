"use client";
interface IParamsProps {
  params: any;
}

const AdminEditPage = ({ params }: IParamsProps) => {
  console.log(params);
  return <div>AdminEditPage</div>;
};

export default AdminEditPage;
