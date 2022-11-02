import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BlurhashCanvas } from "react-blurhash";

type Props = {
  src?: string;
  hash?: string;
};

export default function Image(props: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <LazyLoadImage
        width="100%"
        src={props.src}
        beforeLoad={() => setLoading(true)}
        afterLoad={() => setLoading(false)}
      />
      {loading && !!props.hash && (
        <div
          style={{
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <BlurhashCanvas
            hash={props.hash}
            width={32}
            height={32}
            punch={1}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
