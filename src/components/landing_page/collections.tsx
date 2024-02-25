/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const categories = [
  {
    name: 'Vegan Shoes',
    href: '#',
    imageSrc: 'https://s41230.pcdn.co/wp-content/uploads/2019/09/vegan-plant-based-news-nothing-new-shoes-Cropped-1-1024x576.png',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
    description: 'Running shoes, hiking shoes, and more.',
  },
  {
    name: 'Vegan Pet Supplies',
    href: '#',
    imageSrc: 'https://www.rd.com/wp-content/uploads/2019/09/amazing-portrait-of-young-crossbreed-dog-german-shepherd-during-sunset-in-grass-e1576859426599-scaled.jpg?fit=700,700',
    imageAlt: 'Happy dog in a field.',
    description: 'Everything your furry friends need that are not made with other furry friends.',
  },
  {
    name: 'Vegan Makeup',
    href: '#',
    imageSrc: 'https://media.allure.com/photos/62169245cceb34b61e2ff936/16:9/w_2560%2Cc_limit/woman%2520applying%2520eye%2520shadow.jpg',
    imageAlt: 'Makeup brushes in a cup on a marble counter next to a marble tray of compacts.',
    description: 'Find the perfect shade of lipstick and make it cruelty free and vegan for your skin and for our world.',
  },
]

export default function Collections() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Shop by Collection</h2>
        <p className="mt-4 text-base text-gray-500">
          For people who want to stop animal cruelty and save the planet, while also having the freedom to shop for whatever they want.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <div
                aria-hidden="true"
                className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
              >
                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{category.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
