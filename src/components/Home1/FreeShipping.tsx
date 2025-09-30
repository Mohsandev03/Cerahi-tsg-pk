import Image from 'next/image';

const FreeShipping = () => {
  return (
    <div className="free__shipping bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner/page-title-s2.jpg)' }}>
      <div className="container mx-auto py-16">
        <div className="flex justify-center">
          <div className="text-center w-full">
            <div className="shiping__thumb">
              {/* You can add an image or other elements inside here if needed */}
              <span></span>
            </div>
            <div className="shiping__content">
              <h2 className="text-3xl font-semibold pb-8">All Orders Are Free Shipping</h2>
              <p className="text-lg">
                Donec vehicula cursus vestibulum lectus, sit eros integer varius cum turpis et quam congue
                <br />
                accumsan ac bibendum ac in erat. Donec posuere consectetuer volutpat rutrum ac sollicitudin
                quam quisque at interdum dignissim fringilla
                <br />
                elit risus lorem condimentum eros mollis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeShipping;
