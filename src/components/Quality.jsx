import PropTypes from 'prop-types'
export default function Quality({icon, title, description}) {
  return (
    <div className="px-8 py-12 bg-[#303030]">
        <div className="flex items-start w-full h-full text-white">
            <div className='mr-4'>{icon}</div>
            <div className="flex flex-col w-full">
                <h3 className="text-[20px] font-merriweather font-semibold">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    </div>
  )
}

Quality.propTypes ={
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}