export default function Home() {
  const products = [
    {
      id: 1,
      imgSrc: "/product11-free-img.jpg",
      altText: "Product 1",
      title: "Product 1",
      description: "Description of product 1."
    },
    {
      id: 2,
      imgSrc: "/product11-free-img.jpg",
      altText: "Product 2",
      title: "Product 2",
      description: "Description of product 2."
    },
    {
      id: 3,
      imgSrc: "/product11-free-img.jpg",
      altText: "Product 3",
      title: "Product 3",
      description: "Description of product 3."
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-greenColor mb-4">Welcome to Our Organic Food Store</h1>
      <p className="text-lg text-greenColor mb-8">Discover the best organic products for a healthy lifestyle.</p>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4">
            <img src={product.imgSrc} alt={product.altText} className="w-full h-auto rounded-lg shadow-md" />
            <h2 className="text-xl font-semibold text-greenColor mt-2">{product.title}</h2>
            <p className="text-greenColor">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}