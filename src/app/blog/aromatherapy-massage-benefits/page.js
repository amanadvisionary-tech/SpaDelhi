import Image from "next/image";
import Link from "next/link";
import WhatsappFloat from "../../components/WhatsappFloat";
import { Breadcrumbs, InfoBox, BenefitCard, FaqAccordion } from "../../components/BlogComponents";

export const metadata = {
  title: "Aromatherapy Massage Benefits: Essential Oils for Relaxation | Spa Delhi",
  description:
    "Discover the top aromatherapy massage benefits - stress relief, better sleep, and muscle pain relief with essential oils like lavender. Read the full guide now!",
  keywords: [
    "aromatherapy massage benefits",
    "essential oil massage benefits",
    "benefits of lavender massage oil",
    "best body massage oils for relaxation",
    "muscle pain relief essential oils",
    "aroma relaxation massage",
    "aromatherapy relaxation massage",
  ],
  alternates: {
    canonical: "https://www.spadelhi.com/blog/aromatherapy-massage-benefits",
  },
  openGraph: {
    title: "Aromatherapy Massage Benefits: How Essential Oils Can Enhance Relaxation & Wellness",
    description:
      "Learn how aromatherapy massage and essential oils like lavender can help reduce stress, ease muscle pain, and improve sleep quality.",
    images: ["https://www.spadelhi.com/images/aromatherapy-featured-jpg.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.spadelhi.com/images/aromatherapy-featured-jpg.webp"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.spadelhi.com/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.spadelhi.com/blog" },
    { "@type": "ListItem", position: 3, name: "Aromatherapy Massage Benefits", item: "https://www.spadelhi.com/blog/aromatherapy-massage-benefits" },
  ],
};

const quickBenefits = [
  { title: "Reduces Stress & Anxiety", description: "Calming scents like lavender help lower stress hormones and quiet a busy mind." },
  { title: "Eases Muscle Pain", description: "Warm essential oils combined with massage pressure help loosen tight, sore muscles." },
  { title: "Improves Sleep Quality", description: "A relaxed nervous system after the session can lead to deeper, more restful sleep." },
  { title: "Boosts Mood", description: "Certain aromas are linked to improved mood and a lighter, more positive feeling." },
  { title: "Supports Circulation", description: "Massage strokes combined with oils may help promote healthy blood flow." },
  { title: "Softens & Nourishes Skin", description: "Natural carrier and essential oils can leave your skin feeling smooth and hydrated." },
];

const faqs = [
  {
    question: "What is aromatherapy massage?",
    answer:
      "Aromatherapy massage is a full body massage that combines traditional massage techniques with essential oils, such as lavender, chamomile, or eucalyptus, to enhance relaxation and support overall wellness.",
  },
  {
    question: "Is lavender oil good for massage?",
    answer:
      "Yes. Lavender is one of the most popular essential oils used in massage because of its calming aroma, which many people find helpful for reducing stress and supporting better sleep.",
  },
  {
    question: "Can aromatherapy massage help with muscle pain?",
    answer:
      "Many people find that combining massage pressure with warm essential oils helps ease tight and sore muscles. For ongoing or severe pain, it is best to consult a doctor.",
  },
  {
    question: "How long does an aromatherapy massage session last?",
    answer:
      "Most aromatherapy massage sessions last between 60 and 90 minutes, depending on the treatment and areas of focus you choose.",
  },
  {
    question: "Is aromatherapy massage safe for everyone?",
    answer:
      "Aromatherapy massage is generally safe for most healthy adults. However, pregnant women, people with allergies, or those with certain skin or health conditions should consult a doctor and inform their therapist beforehand.",
  },
  {
    question: "How is aromatherapy massage different from a regular massage?",
    answer:
      "A regular massage focuses mainly on physical pressure and technique, while an aromatherapy massage adds essential oils chosen for their calming or therapeutic scent, offering both physical and sensory relaxation.",
  },
];

const relatedBlogs = [
  {
    title: "What Does Thai Massage Do to Your Body?",
    href: "/blog/thai-massage-does-to-your-body",
    image: "/images/thaimassage1.png",
  },
  {
    title: "What Is the Difference Between Spa and Massage?",
    href: "/blog/what-is-the-difference-between-spa-and-massage",
    image: "/images/spa-treatments.jpg",
  },
  {
    title: "Swedish Massage vs Deep Tissue Massage",
    href: "/swedish-massage-vs-deep-tissue-massage",
    image: "/images/80535.webp",
  },
  {
    title: "Health Benefits of Sandwich Massage",
    href: "/health-benefits-of-sandwich-massage",
    image: "/images/hb1.webp",
  },
];

export default function AromatherapyMassageBenefitsBlogPage() {
  return (
    <>
      <script
        id="breadcrumb-schema-blog-aromatherapy-massage-benefits"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <main className="bg-[#FFF9F0] text-gray-800">
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Aromatherapy Massage Benefits" }]} />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-amber-100 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.18)] sm:p-8 lg:p-12">
            <div className="mb-8 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Wellness Guide</p>
              <h1 className="text-3xl font-bold leading-tight text-amber-900 sm:text-4xl lg:text-5xl">
                Aromatherapy Massage Benefits: How Essential Oils Can Enhance Relaxation & Wellness
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span>By Spa Delhi Team</span>
                <span>•</span>
                <span>Updated September 21, 2026</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>

            <div className="relative mb-8 h-[280px] overflow-hidden rounded-[24px] sm:h-[380px]">
              <Image
                src="/images/aromatherapy-featured-jpg.webp"
                alt="Aromatherapy massage with essential oils"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="space-y-8">
                <section className="space-y-4">
                  <p className="text-lg leading-8 text-gray-700">
                    Do you ever feel mentally drained even after a full night&apos;s sleep? Between work pressure, traffic, and screen time, our minds rarely get a real break, and our bodies quietly carry that tension in the neck, shoulders, and back.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    This is where an <strong>aromatherapy massage</strong> can make a real difference. By combining gentle massage techniques with the natural scent and properties of essential oils, it works on both your body and your mind at the same time.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    In this guide, we will walk through the biggest <strong>aromatherapy massage benefits</strong>, how essential oils like lavender support relaxation, what happens during a typical session, and how to choose the right oil for your needs.
                  </p>
                </section>

                <section className="rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6">
                  <h2 className="mb-4 text-2xl font-semibold text-amber-900">Table of Contents</h2>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><a href="#what-is-aromatherapy-massage" className="hover:text-amber-700">• What Is Aromatherapy Massage?</a></li>
                    <li><a href="#benefits" className="hover:text-amber-700">• Aromatherapy Massage Benefits</a></li>
                    <li><a href="#lavender" className="hover:text-amber-700">• Benefits of Lavender Massage Oil</a></li>
                    <li><a href="#comparison" className="hover:text-amber-700">• Aromatherapy Massage vs Regular Massage</a></li>
                    <li><a href="#what-to-expect" className="hover:text-amber-700">• What Happens During a Session</a></li>
                    <li><a href="#choosing-oils" className="hover:text-amber-700">• Choosing the Best Massage Oils for Relaxation</a></li>
                    <li><a href="#who-should-avoid" className="hover:text-amber-700">• Who Should Be Cautious?</a></li>
                    <li><a href="#faqs" className="hover:text-amber-700">• Frequently Asked Questions</a></li>
                    <li><a href="#final-thoughts" className="hover:text-amber-700">• Final Thoughts</a></li>
                  </ul>
                </section>

                <section id="what-is-aromatherapy-massage" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">What Is Aromatherapy Massage?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Aromatherapy massage is a full body treatment that blends classic massage strokes with essential oils extracted from plants, flowers, and herbs. Each oil is chosen for its natural aroma and the way it makes you feel — calm, energized, or simply relaxed.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    The essential oils are usually diluted in a carrier oil (like almond or coconut oil) and gently massaged into the skin. As the therapist works on your muscles, the scent is released into the air and absorbed through the skin, engaging both your sense of smell and your sense of touch.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    This dual approach is what makes an <strong>aroma relaxation massage</strong> feel different from a standard oil massage — it is designed to calm your nervous system while easing physical tension at the same time.
                  </p>
                  <div className="relative h-[240px] overflow-hidden rounded-[20px]">
                    <Image
                      src="/images/fpkdl.com_960_1758980177_natural-elements-spa-with-candles_23-2148199485.jpg"
                      alt="Spa setup with essential oils and candles"
                      fill
                      className="object-cover"
                    />
                  </div>
                </section>

                <section id="benefits" className="space-y-5 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Aromatherapy Massage Benefits</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Here is a quick look at the most common <strong>essential oil massage benefits</strong> before we go into detail.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {quickBenefits.map((benefit) => (
                      <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
                    ))}
                  </div>

                  <div className="space-y-8 pt-4">
                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">1. Deep Stress and Anxiety Relief</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Certain essential oils, especially lavender and chamomile, are widely used for their calming aroma. Combined with slow, rhythmic massage strokes, they can help quiet a racing mind and ease everyday anxiety.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Many clients say they feel noticeably lighter and calmer by the end of a single session.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">2. Relief From Muscle Pain and Tension</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Warm oils combined with focused pressure can help loosen tight muscles in the neck, shoulders, and lower back — common trouble spots for anyone who sits at a desk for long hours.
                      </p>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Oils like eucalyptus and peppermint are often chosen specifically for <strong>muscle pain relief essential oils</strong> blends, as their cooling or warming sensation can add extra comfort during the massage.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">3. Better Sleep Quality</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        When your body and mind relax together, it becomes easier to fall — and stay — asleep. This is one of the most frequently reported benefits among people who try an aromatherapy massage in the evening.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">4. Mood Improvement</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Certain scents are linked to a more positive, uplifted mood. Citrus oils like orange and bergamot are often used when the goal is to feel refreshed and energized rather than simply sleepy.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">5. Improved Blood Circulation</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        The massage strokes used to apply the oils help stimulate blood flow, which may support faster muscle recovery and leave your skin looking fresh.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">6. Relief From Headaches</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Gentle massage around the head, neck, and shoulders combined with calming oils like lavender or peppermint may help ease tension headaches that are often triggered by stress.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">7. Softer, Nourished Skin</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Carrier oils used in aromatherapy massage help moisturize the skin, leaving it feeling smooth and hydrated well after the session ends.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-amber-900">8. A Complete Mind-Body Reset</h3>
                      <p className="mt-3 text-lg leading-8 text-gray-700">
                        Unlike massages that focus only on the physical body, aromatherapy massage engages your sense of smell as well, making the experience feel like a complete reset rather than just a muscle treatment.
                      </p>
                    </div>
                  </div>

                  <InfoBox title="A Quick Note">
                    <p>
                      Aromatherapy massage is a wellness and relaxation treatment, not a medical treatment. It should not replace advice or care from a qualified doctor, especially for chronic pain or existing health conditions.
                    </p>
                  </InfoBox>
                </section>

                <section id="lavender" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Benefits of Lavender Massage Oil</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Lavender is, by far, the most popular oil used in aromatherapy massage — and for good reason.
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Widely known for its calming, stress-relieving scent</li>
                    <li>Often used to help support more restful sleep</li>
                    <li>Gentle enough for most skin types when properly diluted</li>
                    <li>Pairs well with other oils like chamomile for an extra calming effect</li>
                    <li>A popular choice for a first-time aromatherapy massage</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    If you are new to aromatherapy massage and unsure which oil to pick, lavender is usually the safest and most relaxing starting point.
                  </p>
                </section>

                <section id="comparison" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Aromatherapy Massage vs. Regular Massage</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Wondering how an aroma relaxation massage compares to a standard massage? Here is a simple breakdown.
                  </p>
                  <div className="overflow-x-auto rounded-2xl border border-amber-100">
                    <table className="w-full min-w-[480px] text-left text-sm sm:text-base">
                      <thead className="bg-amber-100 text-amber-900">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Aspect</th>
                          <th className="px-4 py-3 font-semibold">Aromatherapy Massage</th>
                          <th className="px-4 py-3 font-semibold">Regular Massage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-amber-100 bg-white text-gray-700">
                        <tr>
                          <td className="px-4 py-3 font-medium">Oils Used</td>
                          <td className="px-4 py-3">Essential oils chosen for scent and effect</td>
                          <td className="px-4 py-3">Plain massage or carrier oil</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Main Focus</td>
                          <td className="px-4 py-3">Mind and body relaxation together</td>
                          <td className="px-4 py-3">Mostly physical muscle relief</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Sensory Experience</td>
                          <td className="px-4 py-3">Touch and scent combined</td>
                          <td className="px-4 py-3">Touch only</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium">Best For</td>
                          <td className="px-4 py-3">Stress, poor sleep, low mood</td>
                          <td className="px-4 py-3">Muscle soreness, stiffness</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="relative h-[240px] overflow-hidden rounded-[20px]">
                  <Image
                    src="/images/fpkdl.com_960_1758980139_natural-elements-spa-with-candles_23-2148199470.jpg"
                    alt="Relaxing aromatherapy spa room"
                    fill
                    className="object-cover"
                  />
                </section>

                <section id="what-to-expect" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">What Happens During an Aromatherapy Massage Session</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    If it is your first time, here is what a typical session usually looks like.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Consultation: Your therapist will ask about your preferences, any allergies, and health concerns before choosing the right essential oil blend for you.",
                      "Oil Selection: Based on your goal — relaxation, energy, or muscle relief — a suitable essential oil is diluted in a carrier oil.",
                      "Massage Begins: The therapist uses smooth, flowing strokes to apply the oil while working on tense areas of the body.",
                      "Relaxation: Sessions typically last between 60 and 90 minutes in a calm, softly lit room with soothing music.",
                      "Aftercare: You are given time to relax and are often offered water to help you rehydrate before leaving.",
                    ].map((step, index) => (
                      <div key={step} className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm">
                        <p className="font-semibold text-amber-900">Step {index + 1}</p>
                        <p className="mt-1 text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="choosing-oils" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Choosing the Best Massage Oils for Relaxation</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Not sure which oil is right for you? Here is a simple guide to some of the <strong>best body massage oils for relaxation</strong>:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li><strong>Lavender</strong> — calming, great for stress and sleep</li>
                    <li><strong>Chamomile</strong> — soothing, pairs well with lavender</li>
                    <li><strong>Eucalyptus</strong> — refreshing, often used for muscle tension</li>
                    <li><strong>Peppermint</strong> — cooling, helpful for tired legs and headaches</li>
                    <li><strong>Sweet Orange</strong> — uplifting, good for boosting mood</li>
                  </ul>
                  <p className="text-lg leading-8 text-gray-700">
                    A good therapist will always ask about your preferences and any skin sensitivities before selecting an oil for your session.
                  </p>
                </section>

                <section id="who-should-avoid" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Who Should Be Cautious?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    Aromatherapy massage is safe for most healthy adults, but it is best to check with your doctor first if you:
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-lg text-gray-700">
                    <li>Are pregnant</li>
                    <li>Have known allergies to essential oils or fragrances</li>
                    <li>Have sensitive or broken skin</li>
                    <li>Have a serious heart condition or recent surgery</li>
                    <li>Are unsure whether a specific oil is safe for you</li>
                  </ul>
                  <InfoBox title="Always Inform Your Therapist">
                    <p>
                      Let your therapist know about any allergies, skin conditions, or medical history before the session begins. This helps them choose oils and pressure levels that are safe and comfortable for you.
                    </p>
                  </InfoBox>
                </section>

                <section id="faqs" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Frequently Asked Questions</h2>
                  <FaqAccordion items={faqs} />
                </section>

                <section id="final-thoughts" className="space-y-4 scroll-mt-32">
                  <h2 className="text-2xl font-semibold text-amber-900">Final Thoughts</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    An aromatherapy massage is more than a pleasant scent paired with a regular massage — it is a complete relaxation experience that works on your body and your mind together.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    From easing stress and muscle pain to improving sleep and mood, the benefits of essential oils combined with skilled massage techniques make it a wonderful addition to your self-care routine.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    As with any treatment, everyone responds a little differently, so always share your health history and preferences with your therapist before the session begins.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-amber-900">Looking for a Professional Aromatherapy Massage in Delhi?</h2>
                  <p className="text-lg leading-8 text-gray-700">
                    If you want to experience these benefits for yourself, Spa Delhi offers a dedicated{" "}
                    <Link href="/aromatherapy-massage-in-delhi" className="font-semibold text-amber-700 underline hover:text-amber-800">
                      Aromatherapy Massage in Delhi
                    </Link>{" "}
                    service with trained therapists and premium essential oils across 24+ outlets.
                  </p>
                  <p className="text-lg leading-8 text-gray-700">
                    Prefer a more classic option? You can also explore our{" "}
                    <Link href="/full-body-massage-in-delhi" className="font-semibold text-amber-700 underline hover:text-amber-800">
                      Full Body Massage in Delhi
                    </Link>{" "}
                    or, if muscle tension is your main concern, our{" "}
                    <Link href="/deep-tissue-massage-in-delhi" className="font-semibold text-amber-700 underline hover:text-amber-800">
                      Deep Tissue Massage in Delhi
                    </Link>{" "}
                    service. Check our{" "}
                    <Link href="/spa-price-in-delhi" className="font-semibold text-amber-700 underline hover:text-amber-800">
                      Spa Price in Delhi
                    </Link>{" "}
                    page for transparent, upfront rates before you book.
                  </p>
                </section>

                <section className="rounded-[24px] bg-gradient-to-r from-amber-600 to-amber-700 p-8 text-white shadow-lg">
                  <h2 className="text-2xl font-semibold">Book Your Aromatherapy Massage in Delhi</h2>
                  <p className="mt-3 max-w-2xl text-amber-50">
                    Relax your body and mind with a soothing aromatherapy massage session using premium essential oils and trained therapists.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link href="/aromatherapy-massage-in-delhi" className="rounded-full bg-white px-6 py-3 font-semibold text-amber-700 transition hover:bg-amber-50">
                      View Aromatherapy Massage Service
                    </Link>
                    <a href="https://api.whatsapp.com/send?phone=919217255113" className="rounded-full border border-white/60 px-6 py-3 font-semibold transition hover:bg-white/10">
                      Book on WhatsApp
                    </a>
                  </div>
                </section>
              </article>

              <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-amber-900">Related Blogs</h3>
                  <div className="mt-5 space-y-4">
                    {relatedBlogs.map((blog) => (
                      <Link key={blog.title} href={blog.href} className="flex items-center gap-3 rounded-xl border border-amber-100 p-3 transition hover:bg-amber-50">
                        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                          <Image src={blog.image} alt={blog.title} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{blog.title}</p>
                          <p className="text-sm text-amber-700">Read more</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="relative h-48 overflow-hidden rounded-2xl">
                  <Image src="/images/spaExper2.webp" alt="Spa therapist preparing essential oils" fill className="object-cover" />
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <WhatsappFloat />
    </>
  );
}
