import { useParams } from "react-router-dom";
export default function ProductDetails() {
    const { name } = useParams();
  return (
    <div className="py-36">{name}</div>
  )
}
