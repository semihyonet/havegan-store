const categoryList = [
    {
        id: 1,
        slug: 'test', name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt: "Black journal with silver pen on wooden desk."
    },
    {
        id: 2,
        slug: 'test', name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
        imageAlt: "Black journal with silver pen on wooden desk."
    },
    {
        id: 3,
        slug: 'test', name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt: "Black journal with silver pen on wooden desk."
    },
    {
        id: 4,
        slug: 'test', name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt: "Black journal with silver pen on wooden desk."
    },
    {
        id: 5,
        slug: 'test', name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
        imageAlt: "Black journal with silver pen on wooden desk."
    },
    {
        id: 6,
        slug: 'test', name: "Self-Improvement",
        description: "Journals and note-taking",
        imageSrc: "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
        imageAlt: "Black journal with silver pen on wooden desk."
    },
]


export default function CategoryList() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
            <div className="grid min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                {
                    categoryList.map((category, i) => (
                            <a className="relative flex group" key={`${i}`} href={`/categories/${category.slug}`}>
                                <img
                                    src={category.imageSrc}
                                    alt={category.imageAlt}
                                    className="absolute inset-0 h-full w-full object-cover object-center"
                                />
                                <div
                                    className="relative flex w-full flex-col items-start justify-end bg-black bg-opacity-40 p-8 sm:p-12 group-hover:bg-opacity-10 transition duration-900">
                                    <h2 className="text-lg font-medium text-white text-opacity-75">{category.name}</h2>
                                    <p className="mt-1 text-2xl font-medium text-white">{category.description}</p>
                                    <div
                                        className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                        Shop now
                                    </div>
                                </div>
                            </a>
                        )
                    )
                }

            </div>
        </>
    )
}
