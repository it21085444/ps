import Link from "next/link";
// Components
import HomerowSection from "@/components/home/homerow-section/homerow-section";
import ProductEssentials from "@/components/home/product-essentials/product-essentials";
//Styles
import "./home.css";
import ProductHerbal from "@/components/home/product-herbal/product-herbal";
import ProductPremium from "@/components/home/product-premium/product-premium";

export default function Home() {
  return (
    <main>
      <div className="home relative">
        <img
          className="home-banner"
          src="/images/banners/home-banner1.png"
          alt="Home Banner"
        />

        <HomerowSection />

        {/* ------- Essential Products ------- */}
        <div className="essential-banner relative">
          <img
            className="essential-banner-image"
            src="/images/banners/Essentials Products.png"
            alt="Essential banner"
          />
          <div className="essential-content absolute">
            <h1 className="font-bold text-white lg:text-5xl md:text-4xl">
              PiumiSkin Essentials
            </h1>
            <p className="essential-paragraph text-white italic w-[35%] text-justify mt-3 lg-font-medium">
              Membership is complimentary and when you join, you u be eligible
              to earn points and receive perks. earn points each time you shop
              on Piumiskin.com follow us on social media, write product reviews
              and more. redeem your points for exclusive rewards on Piumiskjn.
              corn,
            </p>
            <Link href="/cosmetics">
              <button className="essential-button border-2 lg:px-5 lg:py-3 rounded text-white mt-3 hover:font-bold  duration-150">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <ProductEssentials />

        {/* ------- Herbal Products ------- */}
        <div className="herbal-banner relative">
          <img
            className="herb-banner-image"
            src="/images/banners/herb-banner.png"
            alt="Herb banner"
          />
          <div className="essential-content absolute">
            <h1 className="font-bold text-white lg:text-5xl md:text-4xl">
              PiumiSkin Ceylon Herbal
            </h1>
            <p className="essential-paragraph text-white italic w-[35%] text-justify mt-3 lg-font-medium">
              Membership is complimentary and when you join, you u be eligible
              to earn points and receive perks. earn points each time you shop
              on Piumiskin.com follow us on social media, write product reviews
              and more. redeem your points for exclusive rewards on Piumiskjn.
              corn,
            </p>
            <Link href="/cosmetics">
              <button className="essential-button border-2 lg:px-5 lg:py-3 rounded text-white mt-3 hover:font-bold  duration-150">
                Shop Now
              </button>
            </Link>
          </div>
        </div>

        <ProductHerbal />

        {/* ================================================================= */}

        {/* ------- Background Flower ------- */}
        <img
          className="flower-image"
          src="/images/home/flower-home.png"
          alt="Deco"
        />

        {/* ================================================================= */}

        {/* ------- Premium Products ------- */}
        <div className="premium-banner relative">
          <img
            className="premium-banner-image"
            src="/images/banners/premium-banner.png"
            alt="Premium banner"
          />
          <div className="premium-content absolute">
            <h1 className="font-bold text-white lg:text-5xl md:text-4xl">
              PiumiSkin Premium
            </h1>
            <p className="essential-paragraph text-white italic w-[65%] text-justify mt-3 lg-font-medium">
              Membership is complimentary and when you join, you u be eligible
              to earn points and receive perks. earn points each time you shop
              on Piumiskin.com follow us on social media, write product reviews
              and more. redeem your points for exclusive rewards on Piumiskjn.
              corn,
            </p>
            <Link href="/cosmetics">
              <button className="essential-button border-2 lg:px-5 lg:py-3 rounded text-white mt-3 hover:font-bold  duration-150">
                Shop Now
              </button>
            </Link>
          </div>

          <ProductPremium />
        </div>
      </div>
    </main>
  );
}
