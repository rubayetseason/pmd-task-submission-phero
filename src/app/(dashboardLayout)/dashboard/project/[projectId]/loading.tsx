import { Skeleton } from "antd";

const Loading = () => {
  return (
    <div>
        <div className="py-5">
          <Skeleton active />
        </div>
        <div className="py-5">
          <Skeleton active />
        </div>
        <div className="py-5">
          <Skeleton active />
        </div>
      </div>
  );
};

export default Loading;
