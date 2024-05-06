import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  useEffect(() => {
    console.log("params", params.id);
  }, []);
  return <div>详情</div>;
}
