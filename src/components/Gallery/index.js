import {Component} from 'react'

import './index.css'
import ThumbnailItem from '../ThumbnailItem'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390328/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.38.27_PM_ay5vjc.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395973/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.38.27_PM1697391851_lvn0cg.jpg',
    imageAltText:
      'shaik ahmed ali qadri bin { mehboob ali shah } bin { jalal shah } bin { rajjab ali shah }',
    thumbnailAltText: 'AHMED',
  },
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390294/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.37.28_PM_kf4pem.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395973/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.37.28_PM1697391851_guatpp.jpg',
    imageAltText: 'Bade Ammi Zawjat shaik Ahmed Ali',
    thumbnailAltText: 'Ammi',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390302/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.37.27_PM_xrjagc.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395973/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.37.27_PM1697391851_shc9tp.jpg',
    imageAltText: 'Naziya Begum Zawjat shaik shakir Qadri',
    thumbnailAltText: 'Naziya',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390249/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.41.46_PM_zaoeql.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395974/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.41.46_PM1697391760_venixj.jpg',
    imageAltText: 'Shaik Shakir Qadri',
    thumbnailAltText: 'Shakir',
  },
  {
    id: 4,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390466/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.30.03_PM_rb8f5a.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395973/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.30.03_PM1697391851_xg4x6h.jpg',
    imageAltText: 'Shaik Rahmath Ali Qadri bin Shaik Ahmed ali Qadri',
    thumbnailAltText: 'Rahmath',
  },
  {
    id: 5,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390444/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.30.03_PM_1_q8rafp.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395973/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.30.03_PM_1_1697391851_xvfu5h.jpg',
    imageAltText: 'bhabi',
    thumbnailAltText: 'Bhabi',
  },
  {
    id: 6,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390296/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.40.09_PM_lmcim8.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395974/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.40.09_PM1697391851_sqlqcq.jpg',
    imageAltText: 'mujahid ali bin Shaik Ahmed ali Qadri',
    thumbnailAltText: 'Raja',
  },
  {
    id: 7,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390254/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.46.29_PM_fglfv7.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395974/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.46.29_PM1697391850_mmkwbr.jpg',
    imageAltText: 'Fouziya Begum Bint Shaik Ahmed ali Qadri',
    thumbnailAltText: 'Fouziya',
  },
  {
    id: 8,
    imageUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697390253/rahmath%20images/pictures%201/WhatsApp_Image_2023-10-15_at_3.46.30_PM_dn7knc.jpg',
    thumbnailUrl:
      'https://res.cloudinary.com/dwngkagt5/image/upload/v1697395974/rahmath%20images/thumbnail/WhatsApp_Image_2023-10-15_at_3.46.30_PM1697391660_nttxih.jpg',
    imageAltText: 'fouziya Bint Shaik Ahmed ali Qadri',
    thumbnailAltText: 'Fouziya',
  },
]

class Gallery extends Component {
  state = {activeImageThumbnailId: imagesList[0].id}

  setActiveThumbnail = id => this.setState({activeImageThumbnailId: id})

  render() {
    const {activeImageThumbnailId} = this.state
    const {imageUrl, imageAltText} = imagesList[activeImageThumbnailId]
    const candidateName = imagesList[activeImageThumbnailId].imageAltText

    return (
      <>
        <p className="creator">App Creator : Javeed Ali Qadri</p>
        <div className="app-container">
          <div className="gallery-container">
            <h1 className="heading">Shaik Ahmed Ali Qadri and Family</h1>
            <p className="description">{candidateName}</p>
            <ul className="thumbnail-container">
              {imagesList.map(eachThumbnail => (
                <ThumbnailItem
                  key={eachThumbnail.id}
                  thumbnailDetails={eachThumbnail}
                  setActiveThumbnail={this.setActiveThumbnail}
                  isActive={activeImageThumbnailId === eachThumbnail.id}
                />
              ))}
            </ul>
            <img src={imageUrl} alt={imageAltText} className="selected-image" />
          </div>
        </div>
      </>
    )
  }
}

export default Gallery
