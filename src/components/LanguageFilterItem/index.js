// Write your code here
import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  changeOutput = () => {
    const {eachFilter, settingNewFilter} = this.props
    settingNewFilter(eachFilter.id)
  }

  render() {
    const {eachFilter, selectedId} = this.props
    const names = selectedId
      ? 'language-btn selected-language-btn'
      : 'language-btn'
    return (
      <li className={names}>
        <btn className="each-name" onClick={this.changeOutput} type="button">
          {eachFilter.language}
        </btn>
      </li>
    )
  }
}

export default LanguageFilterItem
