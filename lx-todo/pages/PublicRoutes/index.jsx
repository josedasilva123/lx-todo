import { Outlet } from "react-router-dom"
import DefaultTemplate from "../../components/templates/DefaultTemplate"

const PublicRoutes = () => {
  return (
    <DefaultTemplate>
        <Outlet />
    </DefaultTemplate>
  )
}

export default PublicRoutes