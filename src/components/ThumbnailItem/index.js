import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setActiveThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails
  const theActive = isActive ? 'active' : ''

  const onClickButton = () => {
    setActiveThumbnail(id)
  }

  return (
    <li className="thumbnail-nail-items">
      <p className="names">{thumbnailAltText}</p>
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickButton}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${theActive}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
