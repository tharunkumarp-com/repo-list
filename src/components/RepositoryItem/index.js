// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachRepo} = props
  const {forksCount, imageUrl, issuesCount, name, starsCount} = eachRepo
  return (
    <li className="each-repo">
      <img src={imageUrl} alt={name} className="repo-image" />
      <h1 className="heading">{name}</h1>
      <div className="all-paras">
        <div className="each-para">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="count-image"
          />
          <p>{`${starsCount} stars`}</p>
        </div>
        <div className="each-para">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="count-image"
          />
          <p>{`${forksCount} forks`}</p>
        </div>
        <div className="each-para">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open-issues"
            className="count-image"
          />
          <p>{`${issuesCount} open issues`}</p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
