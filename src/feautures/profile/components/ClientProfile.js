import { useState, Fragment } from 'react'
import { Listbox } from '@headlessui/react'
import { StyledClientProfileContainer } from '../assets/styles/profileStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListOfBookings from './ListOfBookings'

const status = [
  { id: 1, name: 'In progress' },
  { id: 2, name: 'Completed' },
  { id: 3, name: 'Cancelled' },
]

const ClientProfile = () => {
  const [selectedStatus, setSelectedStatus] = useState(status[0])
  const [listBoxPosition, setListBoxPosition] = useState('up')

  const toggleArrowIcon = () => {
    const newPosition = listBoxPosition === 'up' ? 'down': 'up'
    setListBoxPosition(newPosition)
  }

  return (
    <StyledClientProfileContainer>
      <Listbox value={selectedStatus} onChange={setSelectedStatus}>
        <div className='jobs-status-contaier'>
          <Listbox.Button onClick={toggleArrowIcon} className='visible-status'>
            <span>{selectedStatus.name}</span>
            <FontAwesomeIcon icon={`chevron-${listBoxPosition}`} className='faIcon'/> 
          </Listbox.Button>
          <Listbox.Options className='rest-of-status'>
            {status.map((status) => (
              <Listbox.Option key={status.id} value={status} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`${
                      active ? 'active-status' : ''
                    }`}
                  >
                    <span>
                      {
                        selected && 
                        <FontAwesomeIcon icon='chevron-right' className='faIcon'/>
                      }
                    </span>
                    <span>{status.name}</span>
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      <div>
        <ListOfBookings />
      </div>
    </StyledClientProfileContainer>
  )
}

export default ClientProfile