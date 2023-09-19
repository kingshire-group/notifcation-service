import SingleBooking from "./SingleBooking"
import { StyledListOfBookings } from "./style"

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