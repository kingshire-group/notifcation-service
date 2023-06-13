import styled from "styled-components";

const profileContainerBorderRadius = 4;

export const StyledProfileContainer = styled.div`
  min-height: ${props => props.height}px;
`

export const StyledProfileUpperSection = styled.section`
  background-color: ${props => props.theme.colors.backgroundMagniola};

  & .upper-section-wrapper{
    height: 100%;
    border-top-left-radius: ${profileContainerBorderRadius}rem;
    border-top-right-radius: ${profileContainerBorderRadius}rem;
    background-image: linear-gradient(to right top, 
      #fe798b, #f86c7e, #f25f71, #ec5163, #e54256, 
      #e23b50, #de344a, #db2c44, #db2c44, #db2c44, 
      #db2c44, #db2c44);
    padding:  4rem 3rem 1rem 3rem;
    color: white;

    h1{
      font-size: 1.5rem;
      font-weight: normal;
    }

    & .page-title-and-navigation{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #D7D7D7;
      /* & .logo-wrapper{
        border-radius: 50%;
        background-color: white;
        padding: 1.5rem 1rem 0 1rem;
      } */

      & .faIcon{
        font-size: 2.25rem;
        font-weight: 400;
      }
    }

    & .booking-notification{
      display: flex;
      margin: 2rem 0;
      padding: .75rem 2rem;
      border-left: .25rem solid ${props => props.theme.colors.success};
    }

    & .personal-information{
        display: flex;
        align-items: center;
        & .basic-information{
          display: flex;
          width: 100%;
          justify-content: space-between;
          padding-left: 1rem;
        }

        & .names span:first-child{
          font-weight: Bold;
        }
        & span{
          display: block;
          margin: .5rem 0;
          color: #D7D7D7;
          font-style: italic;
        }
      }
    & .services{
      margin: 2rem 0;

      & ul{
        display: flex;

        & li{
          margin: 0 1rem;
        }
      }
    }
  }
`

export const StyledPersonalImageContainer = styled.div`
  & .personal-image{
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`

export const StyledProfileLowerSection = styled.section`
  background-color: ${props => props.theme.colors.backgroundRed};

  & .lower-section-wrapper{
    background-color: ${props => props.theme.colors.backgroundMagniola};
    height: 100%;
    border-bottom-left-radius: ${profileContainerBorderRadius}rem;
    border-bottom-right-radius: ${profileContainerBorderRadius}rem;
  }
`

export const StyledKinglancerProfile = styled.div`
  height: 100%;
  padding: 1rem 3rem 1rem 3rem;

  & .profile-key-poiints{
    display: flex;
    justify-content: space-between;
    margin: auto;

    & section{
      display: flex;
      align-items: center;

      :first-child span{
        font-weight: bold;
        margin-right: .25rem;
        /* font-size: 1.3rem; */
      }
    }

    & .faIcon{
      margin-right: 1rem;
      font-size: 2rem;
      color: ${props => props.theme.colors.backgroundRed};;
    }

    & p, span{
      font-size: 1.3rem;
      color: gray;
    }
  }

  & .profile-options{
    margin-top: 2rem;

    & .bookings{
      background-color: #FED9D1;

      & span{
        padding: .25rem 1rem;
        border-radius: 1rem;
        color: white;
        background-color: #FE6544 ;
      }
    }
    & .bio{
      background-color: #E0FED1;
    }
    & .services{
      background-color: #FEE9D3;
    }
    & .portfolio{
      background-color: #E4DFFF;
    }
    & .reviews{
      background-color: #DFFAFF;

      & span{
        padding: .25rem 1rem;
        border-radius: 1rem;
        color: white;
        background-color: #46E2FF;
      }
    }
    
    & div{
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      border-radius: 2rem;
      padding: 2rem 1rem;

      :last-child{  margin-bottom: 0 }

      & section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 5;
      }

      & .faIcon{
        flex: 1;
        font-size: 1.5rem;
      }
    }
  }
`

export const StyledClientProfileContainer = styled.div`
  padding: 1rem 3rem 1rem 3rem;

  & .jobs-status-contaier{
    height: 100%;
    position: relative;

    & .visible-status{
      position: relative;
      background-color: ${props => props.theme.colors.blue};
      border: none;
      color: white;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 1rem;
      border-radius: 1rem; 
      cursor: default; 
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
    }

    & .rest-of-status{
      position: absolute;
      margin-top: .5rem;
      background-color: white;
      border-radius: 1rem;
      width: 100%;
      
      li{
        padding: 1.5rem .75rem;
        display: grid;
        grid-template-columns: 7% 93%;

        :first-child{
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
        }

        :last-child{
          border-bottom-left-radius: 1rem;
          border-bottom-right-radius: 1rem;
        }
      }
    }

    & .active-status{
      background-color: #b1c6fc;
    }
  }
`

export const StyledListOfBookings = styled.div`
  margin: 2rem 0;
`

export const StyledSingleBooking = styled.div`
  border-radius: 1rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  margin-bottom: 1rem;

  :last-child{
    margin-bottom: 0
  }

  & .title-and-dueDate, .description{
    padding: 1rem;
  }
  
  & .title-and-dueDate{
    display: grid;
    grid-template-columns: 65% 35%;
    
    span{
      color: ${props => props.theme.colors.backgroundRed};
      font-weight: bold;
    }
  }

  & .bottom-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: .5rem;
    padding-top: 1.5rem;
    border-top: .1rem dashed gray;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;

    & button{
      color: white;
      background-color: ${props => props.theme.colors.backgroundRed};
    }
  }
`
