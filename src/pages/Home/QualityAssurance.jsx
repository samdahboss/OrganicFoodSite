import qualities from "../../utils/Qualities";
import PropTypes from "prop-types";

export function Quality({ icon, title, description }) {
  return (
    <div className="px-8 py-12 bg-[#303030]">
      <div className="flex items-start w-full h-full text-white">
        <div className="mr-4">{icon}</div>
        <div className="flex flex-col w-full">
          <h3 className="text-[20px] font-merriweather font-semibold">
            {title}
          </h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

Quality.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default function QualityAssurance() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-black mx-auto p-6">
      {qualities.map((quality, index) => (
        <Quality key={index} {...quality} />
      ))}
    </section>
  );
}
