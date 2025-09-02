const Services = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl md:text-2xl font-semibold text-dark-charcoal mb-4">
        Our Services
      </h3>
      <ul className="space-y-3 text-warm-gray">
        <li className="flex items-center space-x-2 md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Custom wedding bouquets and centerpieces</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Church and event decorations</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Sympathy and funeral arrangements</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Christmas Decoration</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Same-day delivery within city limits</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Office Interior Decoration</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Backdrop</span>
        </li>
        <li className="flex items-center space-x-2  md:text-xl">
          <div className="w-2 h-2 bg-highlight rounded-full"></div>
          <span>Event Planning and Coordination</span>
        </li>
      </ul>
    </div>
  );
};

export default Services;
