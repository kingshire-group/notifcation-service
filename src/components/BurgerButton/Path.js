import { motion } from 'framer-motion'

const Path = (props) => {
  return(
    <motion.path 
      fill='red'
      strokeLinecap='round'
      strokeWidth='3'
      {...props}
    />
  )
}

export default Path
