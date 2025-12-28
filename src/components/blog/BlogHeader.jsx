export default function BlogHeader() {
  return (
    <div className="bg-white border-b border-(--less-white)">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div
          className="relative bg-[#F9FAFB] p-6 sm:p-8 lg:p-12 overflow-hidden"
          style={{
            backgroundImage: `
              linear-gradient(#E5E7EB 1px, transparent 1px),
              linear-gradient(90deg, #E5E7EB 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        >
          <div className="relative z-10 max-w-[720px]">
            <span className="inline-block px-3 py-1 bg-white border border-(--red) text-(--red) text-sm font-medium mb-4">
              Interviews
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-(--grey) mb-4 lg:mb-6 leading-tight">
              2030: Maya Louvière on IPOs, The No Code Movement & Offending People With The Future
            </h1>

            <p className="text-base lg:text-lg text-[#da1414] mb-6 lg:mb-8 leading-relaxed">
              Turns out, predicting the future can offend people, even if it turn. In 2018, we interviewed Maya Steelman
              who predicted, "Learning to code will eventually be as useful as learning Ancient Greek." Today, learning
              to code is being over-promised as a silver bullet for long-term career success. We chatted to her about
              the 2030 predictions.
            </p>

            {/* <div className="flex items-center gap-3">
              <img src="/images/image.png" alt="Author" className="w-10 h-10 rounded-full" />
              <div>
                <div className="text-sm font-medium text-(--grey)">Maya Louvière</div>
                <div className="text-sm text-(--grey) opacity-60">20 Jan 2024 • 10 min read</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
