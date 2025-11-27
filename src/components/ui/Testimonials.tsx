import { RiStarFill } from "@remixicon/react"

export default function Testimonials() {
    const testimonials = [
        {
            name: "Aisha S.",
            role: "Salon Owner",
            business: "Aisha's Beauty Studio",
            quote: "VoicePilot handles every call for my salon and makes us look professional. Game changer.",
            rating: 5,
            image: "👩🏾",
        },
        {
            name: "Daniel P.",
            role: "Contractor",
            business: "P&D Construction",
            quote: "I'm a contractor and always driving. This agent books jobs and answers questions fast.",
            rating: 5,
            image: "👨🏻",
        },
    ]

    const celebrity = {
        name: "John Cena",
        role: "Celebrity Endorsement",
        quote: "VoicePilot keeps businesses connected effortlessly. I'd trust it to answer my calls.",
        image: "⭐",
    }

    return (
        <section id="testimonials" className="relative mx-auto flex w-full max-w-6xl flex-col px-4 xl:px-0">
            <div className="mx-auto max-w-6xl pt-24 pb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl">
                        What People Are Saying
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Real stories from real business owners
                    </p>
                </div>

                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-xl bg-white p-8 shadow-lg border border-gray-200"
                        >
                            <div className="mb-6 flex items-center gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <RiStarFill key={i} className="size-5 text-yellow-400" />
                                ))}
                            </div>

                            <blockquote className="mb-6 text-lg leading-relaxed text-gray-700">
                                &quot;{testimonial.quote}&quot;
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-50 to-gray-100 text-3xl">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    <div className="text-sm text-teal-600">{testimonial.business}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 p-12 text-center text-white shadow-2xl">
                    <div className="mx-auto max-w-3xl">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-5xl backdrop-blur-sm">
                                {celebrity.image}
                            </div>
                        </div>

                        <blockquote className="mb-6 text-2xl font-medium leading-relaxed md:text-3xl">
                            &quot;{celebrity.quote}&quot;
                        </blockquote>

                        <div>
                            <div className="text-xl font-bold">{celebrity.name}</div>
                            <div className="mt-1 text-teal-100">{celebrity.role}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                        Join hundreds of satisfied customers
                    </h3>
                    <p className="mb-6 text-lg text-gray-600">
                        Start your 7-day free trial today
                    </p>
                    <a
                        href="/products"
                        className="inline-flex items-center rounded-md bg-teal-500 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-teal-600"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </section>
    )
}
