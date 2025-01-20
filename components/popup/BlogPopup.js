import { context } from "@/context/context";
import { useContext } from "react";
import PopContainer from "./PopupContainer";
const BlogPopup = () => {
  const { setBlogModal, blogModal } = useContext(context);
  return (
    <PopContainer nullValue={setBlogModal}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="/assets/img/thumbs/4-2.jpg" alt="" />
          <div className="main" data-img-url={blogModal.img} />
        </div>
        <div className="details">
          <span className="font-poppins mb-[6px] inline-block">
            {blogModal.author}
          </span>
          <h3 className="text-[20px] font-bold">{blogModal.title}</h3>
          <div />
        </div>

        <div className="text">
          <p>
            As a FullStack developer, I specialize in crafting innovative and
            impactful websites tailored to embody your brand essence, enhance
            conversion rates, and optimize revenue generation. My expertise aims
            to propel your business forward, aligning with your objectives and
            fostering growth.
          </p>
          <p>
            In the contemporary digital landscape, your website serves as the
            initial point of contact for consumers engaging with your business.
            This underscores the significance of web design, as nearly 95
            percent of users' initial impressions are influenced by it.
            Consequently, the quality of web design services can significantly
            influence your company's financial performance.
          </p>
          <p>
            That's why an increasing number of companies are not just rethinking
            their website design but are also choosing to partner with Kura, the
            web design agency known for generating over $2.4 billion in revenue
            for its clients. With more than 50 web design awards to our name, I
            am confident in our ability to craft a custom website that boosts
            sales for your unique business.
          </p>
        </div>
      </div>
    </PopContainer>
  );
};
export default BlogPopup;
