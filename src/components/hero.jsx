import React from "react";
import { logo } from "../assets";

export default function Hero() {
  return (
    <header className="w-full  flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com/SubhasishKabi/ArticleSummarizer")}
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md: hidden" />
        <span className="orange_gradient">OpenAI GPT4</span>
      </h1>
      <h2 className="desc">
        Simplify reading with Summize , an open source article summarizer that
        tranforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
}
