const BrandTicker = () => {
  const brandPartners = [
    { image: "images/t1.jpg", name: "Rolls royce" },
    { image: "images/t2.jpg", name: "Mercedes" },
    { image: "images/t3.jpg", name: "Bmw" },
    { image: "images/t4.jpg", name: "Ferrari" },
    { image: "images/t5.jpg", name: "Aston martin" },
    { image: "images/t6.jpg", name: "Land rover" },
    { image: "images/t7.jpg", name: "Lamborghini" },
    { image: "images/t8.jpg", name: "Pangani" },
    { image: "images/t9.jpg", name: "Bently" },
    { image: "images/t10.jpg", name: "Audi" },
    { image: "images/t11.jpg", name: "Jaguar" },
    { image: "images/t12.jpg", name: "Buggati" },
  ];

  const tickerBrands = [...brandPartners, ...brandPartners];

  return (
    <section style={{ width: "100%", overflow: "hidden", padding: "20px 0" }}>
      <h3 style={{ textAlign: "center", marginBottom: "15px" }} className="text-white">
        Brand Partners
      </h3>

      <div
        style={{
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "scrollTicker 20s linear infinite",
          }}
        >
          {tickerBrands.map((brand, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
               margin: "0 20px",
                minWidth: "100px",
              }}
            >
              <img
                src={brand.image}
                alt={brand.name}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                }}
              />
              <span style={{ fontSize: "12px", marginTop: "5px" }}>
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes inside component */}
      <style>
        {`
          @keyframes scrollTicker {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
};

export default BrandTicker;