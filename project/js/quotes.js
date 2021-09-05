const quotes = [
  {
    quote: "I just wanted to take another look at you - A star is born",
    author: "그냥 다시 한번 널 보고 싶었어 <br>- 스타 이즈 본",
  },
  {
    quote:
      "The greatest thing you'll ever learn is just to love and be loved in return - Moulin Rouge",
    author: "살면서 배우는 것 중 가장 위대한 것은 사랑하는 것과 사랑받는 거야 <br> - 물랑루즈 -",
  },
  {
    quote:
      "It's only after we've lost everything that we're free to do anything - Fight Club, Tyler Durben",
    author: "우린 모든 것을 잃은 후에야 무슨 일이든 자유롭게 할 수 있다 <br> - 파이트클럽, 타일러 더벤 -",
  },
  {
    quote:
      "It is not our abilities that show what we truly are, it is our choices - Dumbledore, Harry Potter",
    author: "우리가 진정 무엇인지 보여주는 것은 우리의 능력이 아니라 우리가 만드는 선택이다 <br> - 해리포터, 덤블도어 -",
  },
  {
    quote: "The past can hurt, but you can either run from it, or learn from it - Lion King",
    author: "과거는 아플 수 있어, 하지만 과거로부터 도망갈 수도 있고 배울 수도 있어 <br> - 라이온킹 -",
  },
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;
