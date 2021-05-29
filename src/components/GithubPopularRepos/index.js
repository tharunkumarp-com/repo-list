import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {language: 'ALL', filteredData: [], spinner: true}

  componentDidMount() {
    this.fetchingData()
  }

  fetchingData = async () => {
    const {language} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${language}`,
    )
    const jsonData = await response.json()
    const updatedData = jsonData.popular_repos.map(eachRepository => ({
      id: eachRepository.id,
      imageUrl: eachRepository.avatar_url,
      name: eachRepository.name,
      starsCount: eachRepository.stars_count,
      forksCount: eachRepository.forks_count,
      issuesCount: eachRepository.issues_count,
    }))
    this.setState({filteredData: updatedData, spinner: false})
  }

  settingNewFilter = id => {
    console.log(id)
    this.setState({language: id, spinner: true})
    this.fetchingData(id)
  }

  render() {
    const {filteredData, language, spinner} = this.state
    return (
      <div className="container">
        <h1>Popular</h1>
        <ul className="filter-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              selectedId={each.id === language}
              key={each.id}
              eachFilter={each}
              settingNewFilter={this.settingNewFilter}
            />
          ))}
        </ul>
        {spinner ? (
          <div testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="all-repos">
            {filteredData.map(each => (
              <RepositoryItem eachRepo={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
