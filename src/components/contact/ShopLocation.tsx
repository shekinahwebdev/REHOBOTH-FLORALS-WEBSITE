import { MapPin } from "lucide-react";

const ShopLocation = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-xl md:text-2xl font-semibold text-dark-charcoal mb-4">
        Our Online Shop
      </h3>

      <div className="bg-[url(assets/map.png)] bg-no-repeat h-64 rounded-lg flex items-center justify-center">
        <div className="text-center text-warm-gray">
          <MapPin className="h-12 w-12 mx-auto mb-4" />
          <p className="md:text-xl">Based in</p>
          <p className="text-sm md:text-[17px] font-semibold">New Achimota</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-warm-gray mb-4 md:text-xl">
          We are an <span className="font-semibold">online floral shop</span>,
          bringing fresh flowers and custom arrangements right to your door. Our
          business is proudly based in New Achimota, Ghana.
        </p>

        <div className="space-y-2 text-sm text-warm-gray">
          <p className="md:text-[17px]">
            <strong className="md:text-xl">Delivery:</strong> Same-day delivery
            in Accra & surrounding areas
          </p>
          <p className="md:text-[19px]">
            <strong className="md:text-xl">Pickup:</strong> Available at our New
            Achimota location
          </p>
          <p className="md:text-[19px]">
            <strong className="md:text-xl">Consultations:</strong> Book online
            or in person
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopLocation;
