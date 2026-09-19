import NavBar from "../components/NavBar"
import AdminItemList from "../components/AdminItemList"
import AddItem from "../components/AddItem"

export default function AdminDashboard() {
    return (
        <>
            <NavBar />
            <AdminItemList />
            <hr className="uk-margin-large"/>
            <AddItem />
            <p className="uk-margin-large-bottom"/>
        </>
    )
}