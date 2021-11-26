
import { withRouter } from 'next/router'


const confirmation = ({router}) => {
  return (
    <div>
      {router.query.headingText}
      
    </div>
  )
}

export default withRouter(confirmation)
