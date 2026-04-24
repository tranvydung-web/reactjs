import Banner from "../components/Banner";
import Gioithieu from "../components/Gioithieu";
import ShowSPKM, { ShowSPBC, ShowSPH, ShowSPĐB } from "../components/ShowProduct";
// import Test from "../components/Test";


export default function index() {

    return (
        <>
            <Banner />
            <Gioithieu></Gioithieu>
            <ShowSPKM></ShowSPKM>
            <ShowSPBC></ShowSPBC>
            <ShowSPH></ShowSPH>
            <ShowSPĐB></ShowSPĐB>
            {/* <Test></Test> */}
        </>
    )
}
