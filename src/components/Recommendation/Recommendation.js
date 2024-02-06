import { Bars } from "react-loader-spinner";
import likeIcon from "../../assets/icons/likes.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { useRef, useEffect } from "react";

export default function Recommendation({
  recommendation,
  index,
  GPTExplanation,
  handleSave,
  handleDelete,
  IFrameApiInstance,
}) {
  const refElement = useRef();

  useEffect(() => {
    if (IFrameApiInstance && recommendation) {
      const options = {
        width: "100%",
        height: "160",
        uri: recommendation.artist_uri,
      };
      const callback = (EmbedController) => {};
      IFrameApiInstance.createController(refElement.current, options, callback);
    }
  }, [IFrameApiInstance, recommendation]);

  return (
    <div className="recommendation" key={index}>
      <div className="recommendation__flex">
        <div className="image">
          <img
            src={recommendation.artist_image}
            alt="composer"
            className="recommendation__image"
          />
        </div>
        <div className="recommendation__detailsContainer">
          <div className="recommendation__details">
            <div className="recommendation__track--details">
              <h3 className="recommendation__track">
                {recommendation.track_title}
              </h3>
              <h4 className="recommendation__artist">
                {recommendation.artist_name}
              </h4>
            </div>
            {handleSave ? (
              <div
                onClick={() =>
                  handleSave(recommendation, GPTExplanation, index)
                }
                className="icon__space"
              >
                {!recommendation.saved ? (
                  <img src={likeIcon} alt="save icon" className="icon" />
                ) : null}
              </div>
            ) : null}
            {handleDelete ? (
              <div
                onClick={() =>
                  handleDelete(recommendation, GPTExplanation, index)
                }
                className="icon__space"
              >
                {!recommendation.saved ? (
                  <img src={deleteIcon} alt="save icon" className="icon" />
                ) : null}
              </div>
            ) : null}
          </div>
          <div ref={refElement}></div>
        </div>
      </div>
      <div>
        <h3 className="recommendation__chatGptIntro">
          Why you might like this piece:
        </h3>
        <div className="recommendation__poweredBy">Powered by chatGPT</div>
        <p className="recommendation__chatGptResponse">
          <p className="recommendation__chatGptResponse">
            {GPTExplanation || recommendation.chatGPT ? (
              <p className="recommendation__chatGptResponse">
                {GPTExplanation || recommendation.chatGPT}
              </p>
            ) : (
              <p>
                <Bars
                  height="80"
                  width="80"
                  color="#e2aba3"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </p>
            )}
          </p>
        </p>
      </div>
    </div>
  );
}
