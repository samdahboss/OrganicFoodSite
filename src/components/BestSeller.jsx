import PropTypes from 'prop-types';
export default function BestSeller({image, category, title,stars, price}) {
  return (
    <div className='flex flex-col items-center text-center'>
         <img src={image} alt={title} className='w-full object-cover' />
         <h4 className='text-sm text-gray-500'>{category}</h4>
         <h2 className='text-lg font-semibold'>{title}</h2>
            <div className='flex items-center'>
                <span className='text-greenColor'>{'★'.repeat(stars)}</span>
                <span className='text-gray-400 ml-2'>({stars})</span>
            </div>
        <h3 className='text-lg font-semibold'>£{price}.00</h3>
    </div>
  )
}

BestSeller.propTypes ={
    image: PropTypes.string .isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired, 
    stars: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}
