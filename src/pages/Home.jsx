import Banner from "../components/Banner";
import Gioithieu from "../components/Gioithieu";
import ShowSPKM, { ShowSPBC, ShowSPH, ShowSPDB } from "../components/ShowProduct";
// import ConnectAPI from "../components/ConnectAPI";
// import Test from "../components/Test";


export default function index() {

    return (
        <>
            <Banner />
            <Gioithieu></Gioithieu>
            <ShowSPKM></ShowSPKM>
            <ShowSPBC></ShowSPBC>
            <ShowSPH></ShowSPH>
            <ShowSPDB></ShowSPDB>
            {/* <ConnectAPI />  */}
            {/* <Test></Test> */}
        </>
    )
}
