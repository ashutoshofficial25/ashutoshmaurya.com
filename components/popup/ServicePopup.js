import { context } from '@/context/context';
import { useContext } from 'react';
import PopContainer from './PopupContainer';
const ServicePopup = () => {
  const { serviceModal, setServiceModal } = useContext(context);
  return (
    <PopContainer nullValue={setServiceModal}>
      <div className="popup_informations">
        <div className="image">
          <img src="assets/img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={serviceModal.img}
            style={{ backgroundImage: `url(${serviceModal.img})` }}
          />
        </div>
        <div className="title">
          <h3>{serviceModal.title}</h3>
        </div>
        <div class="description">
          <p>
            As a full stack developer, I offer comprehensive services covering
            both the front-end and back-end aspects of web development. From
            crafting intuitive user interfaces to building robust server-side
            architecture, I ensure that every aspect of your website functions
            seamlessly. My expertise extends to a wide range of technologies and
            frameworks, allowing me to tailor solutions that meet your specific
            needs and requirements. With a focus on delivering high-quality code
            and exceptional user experiences, I have garnered a reputation for
            excellence among my clients.
          </p>
          <p>
            As a blockchain developer, I specialize in leveraging decentralized
            technologies to drive innovation and security in digital ecosystems.
            From developing smart contracts to building decentralized
            applications (DApps), I have the skills and expertise to bring your
            blockchain-based projects to life. Whether you're looking to explore
            the potential of decentralized finance (DeFi) or implement
            blockchain solutions in your business operations, I can provide
            customized development services that align with your goals and
            objectives. My commitment to staying abreast of the latest
            advancements in blockchain technology ensures that my clients
            receive cutting-edge solutions that deliver tangible results.
          </p>

          <p>
            With a track record of satisfied clients across various industries,
            I take pride in delivering exceptional services that exceed
            expectations. By combining my expertise as a full stack developer
            with my proficiency in blockchain development, I offer comprehensive
            solutions that empower businesses to thrive in today's digital
            landscape. From conceptualization to deployment and beyond, I am
            dedicated to providing ongoing support and guidance to ensure the
            success of your projects. Let's collaborate to turn your vision into
            reality and drive success together.
          </p>
        </div>
      </div>
    </PopContainer>
  );
};
export default ServicePopup;
