import { getCategories } from "../Allapi/Api";
import Nav from "./nav";

const Navlinks = async () => {
const datas = await getCategories();

return (
<div className="container mx-auto flex gap-4 sm:gap-6 md:gap-10 py-2 px-3 sm:px-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
{datas.map((data, ind) => (
<Nav key={ind} data={data} />
))}
</div>
);
};

export default Navlinks;