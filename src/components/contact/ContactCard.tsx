import { contactInfo } from "../../data/contactInfo";

const ContactCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-9">
      {contactInfo.map((info, index) => {
        const IconComponent = info.icon;
        return (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md text-center"
          >
            <div className="bg-slight-background-tint w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <IconComponent className="h-8 w-8 text-highlight-words" />
            </div>
            <h3 className="text-2xl font-semibold text-dark-charcoal mb-2">
              {info.title}
            </h3>
            <p className="text-xl font-bold text-dark-charcoal mb-1">
              {info.details}
            </p>
            <p className="text-warm-gray md:text-xl">{info.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCard;
