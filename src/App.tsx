"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Sachi me?",
      "What if I asked really nicely?",
      "Chudi Payal launga",
      "With Cadbury Silk Heart Blush on top",
      "What about a Butterscotch Icecream",
      "PLEASE BACHOO",
      "Arey tor pyaar me dobal dobal rahona",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to abhishek's ghost",
      "please baby",
      ":((((",
      "PRETTY PLEASE",
      "Tumhe apna khoon peene dunga",
      "Still No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Suchi!! ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHB4MHY5bGI5aDM0MnFyY2M2NXd3ZWVteGduOXE0b2swdmJ1ZDhtbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tshmvVDvKNmaXZ2fCN/giphy.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
