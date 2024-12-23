import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}
  leftSlide = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }
  rightSlide = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }
  getReviewPersonDetails = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    const reviewPersonDetails = reviewsList[index]
    return reviewPersonDetails
  }
  render() {
    const reviewPersonDetails = this.getReviewPersonDetails()
    const {imgUrl, username, companyName, description} = reviewPersonDetails
    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <div className="info-container">
          <img src={imgUrl} alt={username} />
          <p className="person-name">{username}</p>
        </div>
        <div className="navigation-buttons">
          <button
            className="button"
            type="button"
            onClick={this.leftSlide}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <button
            className="button"
            type="button"
            onClick={this.rightSlide}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <div className="review-description-container">
          <p className="review-company">{companyName}</p>
          <p className="review-description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
