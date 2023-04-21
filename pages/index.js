import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fine Wines from Ondjaba</title>
        <meta name="description" content="Fine Wines from Ondjaba - Buy the best wines online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Ondjaba Wines</h2>
          <p className="text-xl">We offer a curated selection of the finest wines from around the world, available for purchase online.</p>
        </section>

        <section className="flex flex-wrap -mx-4">
          <div className="md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">About Us</h3>
            <p className="mb-4">Ondjaba Wines was founded in 1986 by a group of wine enthusiasts who wanted to share their passion for fine wines with the world. Since then, we have been offering a carefully curated selection of the best wines from around the globe.</p>
            <Link href="/about"
               className="text-lg text-blue-700 font-bold">Learn More &rarr;
            </Link>
          </div>

          <div className="md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Collections</h3>
            <p className="mb-4">Explore our collections of red, white, and sparkling wines, hand-picked by our experts for their exceptional quality and unique characteristics.</p>
            <Link href="/collections"
               className="text-lg text-blue-700 font-bold">View Collections &rarr;
            </Link>
          </div>

          <div className="md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Jewels Restaurant</h3>
            <p className="mb-4">Visit our restaurant, Jewels, for a fine dining experience that perfectly complements our wines. Our chefs create exquisite dishes that are perfectly paired with our wines to enhance your dining experience.</p>
            <Link href="/restaurant"
               className="text-lg text-blue-700 font-bold">Discover Jewels &rarr;
            </Link>
          </div>

          <div className="md:w-1/2 px-4 mb-8">
            <h3 className="text-2xl font-bold mb-4">Tasting</h3>
            <p className="mb-4">Join us for a wine tasting experience that will introduce you to some of the finest wines from around the world. Our expert sommeliers will guide you through the tasting, sharing their knowledge and passion for fine wines.</p>
            <Link href="/tasting"
               className="text-lg text-blue-700 font-bold">Book a Tasting &rarr;
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
