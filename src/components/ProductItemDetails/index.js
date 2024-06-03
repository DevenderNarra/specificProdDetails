import {Component} from 'react'
import Header from '../Header'
import './index.css'

class ProductItemDetails extends Component {
  componentDidMount() {
    this.getSpecificProdDetails()
  }

  getSpecificProdDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/products/${id}`)
    console.log(response)
  }

  render() {
    return (
      <div className="specific-prod-container">
        <Header />
        <h1>Specific Product Details</h1>
      </div>
    )
  }
}
export default ProductItemDetails
