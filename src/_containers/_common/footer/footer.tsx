import {useLocation} from "react-router-dom"
import LandingFooter from "@container/_common/footer/footer.landing.tsx"
import DefaultFooter from "@container/_common/footer/footer.default.tsx"

const Footer = () => {
  const path = useLocation()

  if (path.pathname === "/") return <LandingFooter />
  else if (
    path.pathname === "/airdrop" ||
    path.pathname === "/airdrop2" ||
    path.pathname.includes("airdrop") ||
    path.pathname.includes("airdrop2")
  )
    return <></>
  else return <DefaultFooter />
}

export default Footer
