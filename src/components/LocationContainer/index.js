const LocationContainer = props => {
  const {locationData} = props
  const {name, imageUrl, description} = locationData
  return (
    <li className="list-location">
      <img src={imageUrl} alt={name} className="image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default LocationContainer
