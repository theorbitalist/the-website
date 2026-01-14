export default function BlogContent() {
  return (
    <div className="bg-(--grey)">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* Hero Image */}
        {/* <div className="mb-8 lg:mb-16">
          <img
            src="https://images.pexels.com/photos/73871/rocket-launch-rocket-take-off-nasa-73871.jpeg?cs=srgb&dl=pexels-pixabay-73871.jpg&fm=jpg"
            alt="Maya Louvière"
            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover"
          />
        </div> */}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 ">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-(--white)">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Sed consectetur enim ut dignissim ultrices. Maecenas vel sagittis enim. At feugiat, urna. Etiam at nunc.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat.
              </p>
              <p className="text-base leading-relaxed text-(--white)">
                Facilisis dui, habitasse diam phasellus, suspendisse. Porta fames arcu quis fusce ligula augue diam.
                Quis et habitasse dolor sit id ultricies enim ut tellus. Molestie aliquot sociis id eni ac volutpat.
              </p>
            </div>

            <div className="bg-(--grey) border-l-4 border-(--red) p-6 lg:p-8">
              <p className="text-lg lg:text-xl font-medium text-(--white) italic leading-relaxed mb-4">
                "In a world older and more complete than ours they move finished and complete, gifted with extensions of
                the senses we have lost or never attained, living by voices we shall never hear."
              </p>
              <p className="text-sm text-(--white)">— Maya Louvière, Entrepreneur</p>
            </div>

            <div className="space-y-4">
              <p className="text-base leading-relaxed text-(--white)">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
                pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada
                fringilla.
              </p>
              <p className="text-base leading-relaxed text-(--white)">
                Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus.
                Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor
                aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat
                donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
                nunc lectus in tellus, pharetra, porttitor.
              </p>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-(--white) mb-4 lg:mb-6">Software and tools</h2>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor.
                Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in pellentesque
                ac.
              </p>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-(--white) mb-4 lg:mb-6">Other resources</h2>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit.
                Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
                ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida
                id. Sed quis auctor vulputate hac elementum gravida cursus dis.
              </p>
              <ol className="space-y-2 list-decimal list-inside text-base text-(--white)">
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>
                  Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
                </li>
                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
              </ol>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-(--white)">
                Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet
                pellentesque aenean hac vestibulum turpis mi bibendum diam.
              </p>
              <p className="text-base leading-relaxed text-(--white)">
                Tempor integer aliquam in vitae malesuada fringilla. Elit nisi in eleifend sed nisi. Pulvinar at orci,
                proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus
                consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit
                congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu
                vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
              </p>
              <p className="text-base leading-relaxed text-(--white)">
                Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget
                consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis
                velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
              </p>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-(--white) mb-4 lg:mb-6">Software and tools</h2>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor.
                Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in pellentesque
                ac.
              </p>
              <ol className="space-y-2 list-decimal list-inside text-base text-(--white)">
                <li>Lectus id duis vitae porttitor enim gravida morbi.</li>
                <li>
                  Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.
                </li>
                <li>Suspendisse maecenas ac donec scelerisque diam sed est duis purus.</li>
              </ol>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-(--white) mb-4 lg:mb-6">Other resources</h2>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit.
                Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
                ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida
                id. Sed quis auctor vulputate hac elementum gravida cursus dis.
              </p>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Lectus leo massa amet posuere. Malesuada mattis non convallis quisque. Libero sit et imperdiet bibendum
                quisque dictum vestibulum in non. Pretium ultricies tempor non est diam. Enim ut sem et integer integer
                vel, duis et. Enim turpis suspendisse ac.
              </p>
              <p className="text-base leading-relaxed text-(--white)">
                Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi
                feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit
                accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed
                mauris vestibulum.
              </p>
            </div>

            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-(--white) mb-4 lg:mb-6">Conclusion</h2>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies.
                Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
                scelerisque amet nulla purus habitasse.
              </p>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt
                pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum
                eget nibh tortor commodo cursus.
              </p>
              <p className="text-base leading-relaxed text-(--white) mb-4">
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet
                erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
                posuere pharetra odio consequat scelerisque et, nunc tortor.
              </p>
              <p className="text-base leading-relaxed text-(--white)">
                Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
