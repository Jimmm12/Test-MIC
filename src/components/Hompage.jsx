import Library from "./content/PhotoLibrary/Library"
import Training from "./content/TraningMIC/Training"
import EventMIC from "./EventMIC"
import Header from "./Header"

const Hompage = () => {
  return (
    <div>
      <Header/>
      <EventMIC/>
      <Library/>
      <Training/>
    </div>
  )
}
export default Hompage