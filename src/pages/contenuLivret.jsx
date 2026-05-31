import HTMLFlipBook from "react-pageflip";
import DocumentIdentification from "./modules/livret/components/documentIdentification";
import Page02Identification from "./modules/livret/components/page02Identification";

export default function ContenuLivret({ data }) {
  return (
    <div className="flipbook-container">
      <HTMLFlipBook
        width={1100}
        height={800}
        size="stretch"
        minWidth={300}
        maxWidth={1100}
        minHeight={400}
        maxHeight={800}
        drawShadow={true}
        flippingTime={600}
        usePortrait={false}
        startPage={0}
        showCover={false}
        mobileScrollSupport={true}
        direction="vertical"
        className="flipbook"
      >
        <div className="livret-page">
          <DocumentIdentification data={data} />
        </div>

        <div className="livret-page">
          <Page02Identification data={data} />
        </div>

      </HTMLFlipBook>
    </div>
  );
}
