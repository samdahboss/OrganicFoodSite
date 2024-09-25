import PropTypes from 'prop-types'
export default function SectionTitle({title}) {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center font-bold text-[#1D1F22]">
          {title}
        </h1>
        <div className="flex justify-center pb-8">
            <img src="/logo-leaf-new.png" alt="logo" />
        </div>
    </div>
  )
}

SectionTitle.propTypes ={
    title: PropTypes.string.isRequired
}