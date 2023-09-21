import SingleBooking from "./SingleBooking"
import { StyledListOfBookings } from "../assets/styles/profileStyle"

const ListOfBookings = () => {
  return (
    <StyledListOfBookings>
      <SingleBooking />
      <SingleBooking />
      <SingleBooking />
      <SingleBooking />
      <SingleBooking />
      <SingleBooking />
    </StyledListOfBookings>
  )
}

export default ListOfBookings