import PropTypes from 'prop-types'
export default function GeneralHero({title}) {
  return (
    <section className="section-hero bg-[#F8F6F3] py-12 w-full">
        <div className="container mx-auto text-center py-12">
          <h1 className="lg:text-[52px] text-[36px] font-bold py-6 lg:py-12 font-merriweather">
            {title}
          </h1>
        </div>
      </section>
  );
}

GeneralHero.propTypes ={
    title: PropTypes.string.isRequired
}