import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './burgerButtonSlice'
import Path from './Path'
import { StyledBurgerButtonWrapper } from './style'

const transition = { duration: 0.33 }

const BurgerButton = () => {
  const isOpen = useSelector(state => state.burgerButton.isOpen)
  const dispatch = useDispatch()

  return(
    <StyledBurgerButtonWrapper onClick = { () => dispatch(toggle()) }>
      <svg width = '28' height = '28' viewBox = '0 0 23 23' fill = 'red'>
        <Path
          animate = { isOpen ? 'open' : 'closed' }
          initial = { false }
          variants = {{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 18%)' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition = { transition }
        />
        <Path
          d = 'M 2 9.423 L 20 9.423'
          stroke = 'hsl(0, 0%, 18%)'
          animate = { isOpen ? 'open' : 'closed' }
          initial = { false }
          variants = {{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition = { transition }
        />
        <Path
          animate = { isOpen ? 'open' : 'closed' }
          initial = { false }
          variants = {{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: 'hsl(0, 0%, 18%)' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
          }}
          transition = { transition }
        />
      </svg>
    </StyledBurgerButtonWrapper>
  )
}

export default BurgerButton
