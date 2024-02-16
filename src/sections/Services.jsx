import { services } from "../assets/constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const whylist=["1. Qualified & Experienced Faculty","2. Industry ready course content","3. Well planned academic curriculum",

  "4. Course delivery through real world applications",
  
  "5. Career Prospects"];
  const nameListItems = whylist.map(name => <li key={name}>{name}</li>);
  return (
    
    <section className="max-container flex justify-center flex-wrap gap-9">
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-5 py-16">
      
      <h3 className=" font-palanquin text-3xl leading-normal font-bold ">
      Why Choose MRUH CSE:
      </h3>
      <ul className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        <div>
        {nameListItems}
        </div>
      </ul>
    </div>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
