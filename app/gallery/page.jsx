export const metadata = {
  title: {
    default: "Gallery - Interior Design Portfolio | Shaarda Interiors Baroda",
    template: "Gallery | Shaarda Interiors  ",
  },
  description:
    "Explore our interior design portfolio in Baroda. View our stunning gallery showcasing a variety of styles, from modern to traditional designs.",
  keywords: [
    "Interior Design Portfolio",
    "Gallery",
    "Interior Styles",
    "Design Showcase",
    "Baroda Projects",
  ],
};

export default function Gallery() {
  return (
    <div class="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/24.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/45.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/3.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/47.png"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/1.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/14.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/33.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/13.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/37.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/11.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/44.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/50.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/38.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src="/image2/30.jpg"
            alt=""
          />
        </div>
        {/* <div>
                    <img class="h-auto max-w-full rounded-lg" src="/image2/16.jpg" alt="" />
                </div> */}
      </div>
    </div>
  );
}
