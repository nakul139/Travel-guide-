import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LocationContainer from '../LocationContainer'

class TravelGuide extends Component {
  state = {
    locationList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.apiUrlPackage()
  }

  apiUrlPackage = async () => {
    this.setState({
      isLoading: true,
    })
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.packages.map(location => ({
        id: location.id,
        name: location.name,
        imageUrl: location.image_url,
        description: location.description,
      }))

      this.setState({
        locationList: updatedData,
        isLoading: false,
      })
    }
  }

  renderLocationList = () => {
    const {locationList} = this.state
    return (
      <ul className="location-list">
        {locationList.map(location => (
          <LocationContainer key={location.id} locationData={location} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1>Travel Guide</h1>
        <hr className="horizontal-line" />
        <div className="location-container">
          {isLoading ? this.renderLoader() : this.renderLocationList()}
        </div>
      </div>
    )
  }
}

export default TravelGuide
